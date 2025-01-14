<script setup>
import finasLogo from '@/assets/images/finas_logo.png'; 
</script>

<template>
  <!-- Clickable logo that redirects to the home page -->
  <router-link to="/">
    <v-img :src="finasLogo" alt="Company Logo" class="custom-logo" />
  </router-link>
</template>

<style scoped>
.custom-logo {
  position: relative;
  top: -12vh;   /* Moves logo higher based on viewport height */
  right: -15vw; /* Moves logo to the right based on viewport width */
  max-width: 15vw; /* Ensures logo width does not exceed 15% of viewport width */
}
</style>
