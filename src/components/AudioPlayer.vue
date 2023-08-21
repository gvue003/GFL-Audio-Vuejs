<template>
  <div class="audio-container">
    <audio ref="audioPlayer" controls loop>
      <source :src="audioSource" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  props: {
    audioSource: String,
  },
};
</script>

<style scoped>
.audio-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
}
</style>
