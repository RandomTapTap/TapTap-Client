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
    playerBars: []
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
    },
    linkStart (state, payload) {
      payload.forEach((player, i) => {
        state.playerBars.push({
          index: i,
          username: player.username,
          variant: 'success',
          value: 0
        })
      })
    },
    deleteBars () {
      state.playerBars = []
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
