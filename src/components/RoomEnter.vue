<template>
    <div>
        <div class="main-container">
            <div class="room-name">
                <!-- <h2>Room name</h2> -->
            </div>
            <div class="room-master">
                <b-card
                    title="Room master"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    style="max-width: 12rem;"
                    class="room-card"
                >
                    <b-card-text>
                        <!-- player name -->
                    </b-card-text>
                </b-card>
            </div>
            <div class="start-container">
                <b-button href="#" variant="success">Start</b-button>
            </div>
            <div class="player">
                <div class="room-container" v-for="data in players" :key="data.id">
                    <b-card
                        :title="data.username"
                        style="max-width: 12rem;"
                        class="room-card"
                    >
                        <b-button href="#" variant="danger">Kick</b-button>
                    </b-card>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io.connect('http://localhost:4000')
export default {
    name: 'RoomEnter',

    data() {
        return {
            players: [],
            roomMasterId : ''
        }
    },
    methods: {
        fetchPlayers() {
            socket.emit("fetchPlayers", payload => {
                
            })
        },
        fetchRoomMaster() {
            socket.emit("fetchRoomMaster", payload => {
            })
        }
    },
    created(){
        this.fetchPlayers()

        socket.on("getPlayers", (player) => {
            this.players.push(player)
            console.log()
        })

        socket.on('allPlayersInRoom', payload => {
            this.players = payload
        })

        console.log(this.players)
    }
}
</script>

<style>
    .main-container {
        border-radius: 8px;
        margin: 14px;
        padding: 8px;
        border-style: solid;
        border-color: steelblue;
    }
    .room-name {
        display: flex;
        justify-content: center;
    }

    .player {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }
    .room-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }
    .room-card {
        margin: 12px;
    }
    .room-master {
        display: flex;
        justify-content: center;
        margin: 8px;
    }
    .start-container {
        display: flex;
        justify-content: center;
    }
    .player {
        display: flex;
        justify-content: center;
    }
    h2 {
        color: black;
    }
</style>
