import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lobby from '../views/Lobby.vue'
import RoomList from '../components/RoomList.vue'
import RoomEnter from '../components/RoomEnter.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby,
    children: [
      {
        path: '',
        name: 'RoomList',
        component: RoomList
      },
      {
        path: '/room',
        name: 'RoomEnter',
        component: RoomEnter
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
