import * as fb from 'firebase';

class Ad {
  constructor(title, description, ownerId, image, promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.image = image
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: []
  },
  mutations: {
    createAd(state, payload){
      state.ads.push(payload);
    },
    loadAds(state, payload){
      state.ads = payload;
    }
  },
  actions: {
    async createAd({commit, getters}, payload){
      commit('clearError');
      commit('setLoading');

      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user,
          payload.image,
          payload.promo
        );

        const ad = await fb.database().ref('ads').push(newAd);

        commit('setLoading', false);
        commit('createAd', {
          ...newAd,
          id: ad.key
        })

      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
      }
    },
    // Получение данных с сервера
    async fetchAds({commit}) {
      commit('clearError')
      commit('setLoading', false)

      try {
        const fbVal = await fb.database().ref('ads').once('value');
        const ads = fbVal.val();


        const resultAds = [];

        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resultAds.push(
            new Ad(ad.title, ad.description, ad.ownerId, ad.image, ad.promo, key)
            )
          })

          console.log(resultAds)

        commit('loadAds', resultAds);
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error
      }
    }
  },
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => ad.promo);
    },
    myAds(state) {
      return state.ads;
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId);
      }
    }
  }
}
