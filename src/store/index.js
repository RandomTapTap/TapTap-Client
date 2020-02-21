import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'

Vue.use(Vuex)
const socket = io.connect('http://localhost:4000')

export default new Vuex.Store({
  state: {
    username: '',
    roomId: null,
    errorMessage: '',
    rooms: [],
    playerBars: [
      { username: 'Ayy', variant: 'success', value: 0 },
      { username: 'Oyy', variant: 'success', value: 0 },
      { username: 'AAA', variant: 'success', value: 0 },
      { username: 'BBB', variant: 'success', value: 0 },
      { username: 'CCC', variant: 'success', value: 0 },
      { username: 'DDD', variant: 'success', value: 0 }
    ]
  },
  mutations: {
    inputUsername (state, payload) {
      state.username = payload.username
      localStorage.username = state.username
    },
    error (state, payload) {
      state.errorMessage = payload.message
    },
    allRooms (state, payload) {
      state.rooms = payload
    },
    incrementValue (state, index) {
      state.playerBars[index].value++
    }
  },
  actions: {
    fetchRooms ({ commit }) {
      socket.on('showAllRooms', payload => {
        commit('allRooms', payload)
      })
    }
  }
})
