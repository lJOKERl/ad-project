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
    createAd({commit}, payload){
      payload.id = "asdaf";
      commit('createAd', payload);
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