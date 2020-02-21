<template>
    <div>
        <b-button @click.prevent="backToWelcomePage" class="btn btn-secondary" style="margin: 12px;">Back To Home</b-button>
        <button type="button" class="btn btn-success" style="margin: 12px;">Create room</button>
        <div class="room-container">
            <b-card
                title="Room name"
                style="max-width: 20rem;"
                class="room-card"
            >
                <b-card-text>
                    Room description goes here
                </b-card-text>

                <b-button href="#" variant="primary">Join room</b-button>
            </b-card>
            <b-card
                title="Room name"
                style="max-width: 20rem;"
                class="room-card"
            >
                <b-card-text>
                    Room description goes here
                </b-card-text>

                <b-button href="#" variant="primary">Join room</b-button>
            </b-card>
            <b-card
                title="Room name"
                style="max-width: 20rem;"
                class="room-card"
            >
                <b-card-text>
                    Room description goes here
                </b-card-text>

                <b-button href="#" variant="primary">Join room</b-button>
            </b-card>
            <b-card
                title="Room name"
                style="max-width: 20rem;"
                class="room-card"
            >
                <b-card-text>
                    Room description goes here
                </b-card-text>

                <b-button href="#" variant="primary">Join room</b-button>
            </b-card>
            <b-card
                title="Room name"
                style="max-width: 20rem;"
                class="room-card"
            >
                <b-card-text>
                    Room description goes here
                </b-card-text>

                <b-button href="#" variant="primary">Join room</b-button>
            </b-card>
            <b-card
                title="Room name"
                style="max-width: 20rem;"
                class="room-card"
            >
                <b-card-text>
                    Room description goes here
                </b-card-text>

                <b-button href="#" variant="primary">Join room</b-button>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RoomList',
  methods: {
      backToWelcomePage () {
          localStorage.removeItem('username')
          this.$router.push('/')
      }
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
