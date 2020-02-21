<template>
  <b-container
    fluid
    align-v="center"
    min-height
  >
    <b-modal
      id="register"
      centered
      busy
      title="Input Your Username"
      hide-footer
    >
      <b-form inline @submit.prevent="submitToLobby">
          <label class="sr-only" for="inline-form-input-name">Username</label>
          <b-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Username"
            v-model="username"
            :state="validation"
            required
          ></b-input>
          <b-form-invalid-feedback :state="validation">
            Minimum 1 character
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validation">
            Looks Good.
          </b-form-valid-feedback>
        <b-button type="submit" variant="primary">Enter</b-button>
      </b-form>
    </b-modal>
    <b-jumbotron
      bg-variant="info"
      text-variant="light"
      border-variant="dark"
    >
      <template
        v-slot:header
      >
        <img src="../assets/gif/ggj18-anim-fly.gif" rounded="circle" alt="Logo GIF"> <span>Random Tap-Tap Racer</span>
      </template>

      <template
        v-slot:lead
      >
        This is about race game, when players try to reach the finish line by tapping rapidly. However, to be able to tap, players have to guess the alphanumeric button on the keyboard correctly, so they can be able to race. When players guess the wrong button, red indicator will let them know, and if they guess the right button, the green indicator will enlighten their way to the finish line. <br>
        Please try our game and have fun (\^_^/)
      </template>

      <hr class="my-4">

      <b-alert
        show
        variant="danger"
      >
        <b-icon icon="alert-triangle"></b-icon> <span>Warning: Your keyboard might be destroyed while playing. We are not responsible for such incidents, so please be careful.</span>
      </b-alert>

      <b-button
        v-b-modal.register
      >
        Go to Lobby
        <b-icon-house></b-icon-house>
      </b-button>
    </b-jumbotron>
  </b-container>
</template>

<script>
import io from 'socket.io-client'
const socket = io.connect('https://polar-ridge-17555.herokuapp.com')

export default {
  name: 'Home',
  data () {
    return {
      username: '',
      message: ''
    }
  },
  computed: {
    validation () {
      return this.username.length >= 1
    }
  },
  methods: {
    submitToLobby () {
      socket.emit('addPlayer', {
        username: this.username
      })
    }
  },
  created () {
    socket.on('playerAdded', payload => {
      localStorage.username = payload.username
      localStorage.idRoom = payload.RoomId
      this.$router.push('/lobby')
    })
  }
}
</script>

<style scoped>
  img {
    width: 10%;
  }
</style>
