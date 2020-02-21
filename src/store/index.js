import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    roomId: null,
    errorMessage: ''
  },
  mutations: {
    inputUsername (state, payload) {
      state.username = payload.username
      localStorage.username = state.username
    },
    error (state, payload) {
      state.errorMessage = payload.message
    }
  },
  actions: {
    registerNewPlayer (context, username) {
      axios({
        method: 'POST',
        url: 'http/localhost:4000/addPlayer',
        data: {
          username: username
        }
      })
        .then(({ data }) => {
          console.log('ayy')
          context.commit('inputUsername', data)
        })
        .catch(err => {
          context.commit('error', err)
        })
    }
  }
})
