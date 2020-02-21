<template>
    <div>
        <b-button @click.prevent="backToWelcomePage" class="btn btn-secondary" style="margin: 12px;">Back To Home</b-button>
        <b-button class="btn btn-success" style="margin: 12px;" v-b-modal="'add-form'">Create room</b-button>
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

        <b-modal id="add-form">
            <b-form>
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
                ></b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Room decription"
                    label-for="input-1"
                >
                <b-form-input
                id="input-1"
                type="text"
                required
                placeholder="Enter description to your room"
                ></b-form-input>
                </b-form-group>
            </b-form>
        </b-modal>
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
