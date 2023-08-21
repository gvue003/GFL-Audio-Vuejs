<template>
  <div class="app">
    <div class="sound-waves"></div>
    <h1 class="title">Connexion by R!N/Gemie (Girls' Frontline: Shattered Connexion)</h1>
    <AudioPlayer :audioSource="audioSource" />
  </div>
</template>

<script>
import AudioPlayer from './components/AudioPlayer.vue';

export default {
  components: {
    AudioPlayer,
  },
  data() {
    return {
      audioSource: '/GFL-ShatteredConnexionED.mp3',
    };
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('/assets/GFLConnexion.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 2rem;
  position: relative; /* Add this line */
}

.title {
  color: white;
  text-align: center;
  margin-top: 2rem;
}
</style>
