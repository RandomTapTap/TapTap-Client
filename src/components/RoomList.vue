<template>
    <div>
        <b-button @click.prevent="backToWelcomePage" class="btn btn-secondary" style="margin: 12px;">Back To Home</b-button>
        <b-button class="btn btn-success" style="margin: 12px;" v-b-modal="'add-form'">Create room</b-button>
        <div class="room-container">
            <b-card
                v-for="(room, i) in rooms"
                :key="i"
                :title="room.RoomName"
                style="max-width: 20rem;"
                class="room-card"
            >
                <b-card-text>
                    Room description goes here
                </b-card-text>

                <b-button @click="oneRoom(room.id)" variant="primary">Join room</b-button>
            </b-card>
        </div>

        <b-modal id="add-form"
            title="New Room"
            hide-footer
            centered
        >
            <b-form @submit.prevent="createRoom">
                <b-form-group
                    id="input-group-1"
                    label="Room name"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    type="text"
                    required
                    placeholder="Enter room name"
                    v-model="room_name"
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Create</b-button>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io.connect('http://localhost:4000')

export default {
  name: 'RoomList',
  data () {
      return {
          room_name: ''
      }
  },
  computed: {
      rooms () {
          return this.$store.state.rooms
      }
  },
  methods: {
      oneRoom (id) {
          this.$router.push('/room')
      },
      backToWelcomePage () {
          localStorage.removeItem('username')
          localStorage.removeItem('RoomId')
          this.$router.push('/')
      },
      roomData () {
        this.$store.dispatch('fetchRooms')
      },
      fetchRooms () {
          console.log('masuk')
          socket.emit('fetchRooms')
      },
      createRoom () {
          socket.emit('createdRoom', {
              RoomName: this.room_name,
              username: localStorage.username
          })
      }
  },
  created () {
      socket.on('AddRoomMaster', payload => {
          localStorage.idRoom = payload.id,
          localStorage.RoomName = payload.RoomName
          localStorage.RoomMaster = payload.RoomMaster
          this.$router.push('/room')
      })
      this.fetchRooms()
      this.roomData()
  },
  beforeDestroy () {
      localStorage.removeItem('roomName')
      localStorage.removeItem('roomData')
      localStorage.removeItem('idRroom')
  }
}
</script>

<style>
    .room-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }
    .room-card {
        margin: 12px;
    }
</style>
