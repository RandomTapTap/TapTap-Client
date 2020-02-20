<template>
  <b-container
    fluid
    align-v="center"
  >
    <b-jumbotron
      bg-variant="info"
      text-variant="light"
      border-variant="dark"
    >
      <template
        v-slot:header
      >
        <img src="../assets/gif/ggj18-anim-fly.gif" rounded="circle" alt="Logo GIF"> <span>Random Tap Tap</span>
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
        to="/lobby"
      >
        Go to Lobby
        <b-icon-house></b-icon-house>
      </b-button>
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  created () {
    document.title = 'Random Tap Tap'
  }
}
</script>

<style scoped>
  img {
    width: 10%;
  }
</style>
