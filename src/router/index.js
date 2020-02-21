import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lobby from '../views/Lobby.vue'
import RommList from '../components/RoomList.vue'
import GameOn from '../components/GameOn.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lobby',
    name: Lobby,
    component: Lobby,
    children: [
      {
        path: '',
        name: 'RoomList',
        component: RommList
      }
    ]
  },
  {
    path: '/game-on',
    name: 'Game On',
    component: Lobby,
    children: [
      {
        path: '',
        name: 'GameOnComp',
        component: GameOn
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
