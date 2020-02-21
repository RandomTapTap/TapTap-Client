<template>
    <div>
        <div class="main-container">
            <div class="room-name">
                <h2>Room name</h2>
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
                        player name
                    </b-card-text>
                </b-card>
            </div>
            <div class="player">
                <div class="room-container">
                    <b-card
                        title="Player name"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        style="max-width: 12rem;"
                        class="room-card"
                    >
                        <b-button href="#" variant="danger">Kick</b-button>
                    </b-card>
                    <b-card
                        title="Player name"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        style="max-width: 12rem;"
                        class="room-card"
                    >
                        <b-button href="#" variant="danger">Kick</b-button>
                    </b-card>
                    <b-card
                        title="Player name"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        style="max-width: 12rem;"
                        class="room-card"
                    >
                        <b-button href="#" variant="danger">Kick</b-button>
                    </b-card>
                    <b-card
                        title="Player name"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        style="max-width: 12rem;"
                        class="room-card"
                    >
                        <b-button href="#" variant="danger">Kick</b-button>
                    </b-card>
                </div>
            </div>
            <div class="start-container">
                <b-button href="#" variant="success">Start</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RoomEnter',
    
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
