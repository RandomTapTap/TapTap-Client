<template>
  <b-container>
    <b-modal id="countdown"
      centered
      hide-footer
      hide-header
      hide-header-close
    >
      <h1>ayy menang</h1>
      <b-button @click='backToLobby'>Back To Lobby</b-button>
    </b-modal>
    <b-modal id="winnerAlert"
      centered
      hide-footer
      hide-header
      hide-header-close
    >
      <h1>ayy menang</h1>
      <b-button @click='backToLobby'>Back To Lobby</b-button>
    </b-modal>
    <div id="game-progress">
      <div v-for="(bar, i) in bars" :key="i" class="row mb-1">
        <div class="col-sm-2">{{ bar.username }}:</div>
        <div class="col-sm-2">
        </div>
        <div class="col-sm-10 pt-1">
          <b-progress :value="bar.value" :variant="bar.variant" :key="bar.variant"></b-progress>
        </div>
        {{bar.value}}
      </div>
    </div>
    <label for="inputLetter">Input</label>
    <input type="text" v-model="input">
  </b-container>
</template>

<script>
import io from 'socket.io-client'
const socket = io.connect('http://localhost:4000')

export default {
    data() {
        return {
          input: '',
          countdown: 3
        }
    },
    computed: {
      bars () {
        return this.$store.state.playerBars
      }
    },
    methods: {
      startGame () {
        this.bars.forEach(el => {
          let randomCharCode = Math.floor(Math.random()*(91 - 65) + 65)
          el.key = String.fromCharCode(randomCharCode)
          if(localStorage.username == el.username) {
            localStorage.userIndex = el.index
          }
        })
      },
      showModal() {
        setTimeout(() => {
          this.$root.$emit('bv::show::modal', 'winnerAlert')
        }, 30000)
      },
      showCountdown () {
        this.$root.$emit('bv::show::modal', 'countdown')
        setInterval(() => {
          this.countdown--
        }, 1000)
        setTimeout(() => {
          this.$root.$emit('bv::hide::modal', 'winnerAlert')
        }, 3000)
      },
      backToLobby () {
        this.$router.push('/lobby')
        this.$store.commit('deleteBars')
        socket.emit('deleteRoom', localStorage.RoomName)
      }
    },
    created () {
      this.startGame()
      this.showModal()
      this.showCountdown()
      
    },
    watch: {
      input () {
        if (this.input === this.bars[localStorage.userIndex].key) {
          this.$store.commit('incrementValue', localStorage.userIndex)
          this.input = ''
        } else {
          this.input = ''
        }
      }
    }
}
</script>
