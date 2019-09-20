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
    ads: [{
        title: 'Первое объявление',
        description: 'Lorem ipsum',
        promo: true,
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '1'
      },
      {
        title: 'Второе объявление',
        description: 'Lorem ipsum',
        promo: true,
        image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '2'
      },
      {
        title: 'Третье объявление',
        description: 'Lorem ipsum',
        promo: false,
        image: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '3'
      },
    ]
  },
  mutations: {
    createAd(state, payload){
      state.ads.push(payload);
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
          getters.user.id, 
          payload.image, 
          payload.promo
        );
        
        const fbValue = await fb.database().ref('ads').push(newAd);
        console.log(getters.user);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
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