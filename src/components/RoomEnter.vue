<template>
    <div>
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
</template>

<script>
export default {
    name: 'RoomEnter'
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
