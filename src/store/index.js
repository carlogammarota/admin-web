import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 30,
  },
  getters: {
    getCount (state) {
      return state.count;
    }
  },
  mutations: {  
    changeCount (state, data) {
      // console.log('store', data)
      state.count = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
