<template>
  <div>
    <center><h2>Tap-tap Racer</h2></center>
    <RoomList />
  </div>
</template>

<script>
import RoomList from '@/components/RoomList.vue'
export default {
  name: 'Lobby',
  components: {
    RoomList
  }
}
</script>

<style>
</style>
