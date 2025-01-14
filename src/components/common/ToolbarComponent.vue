<template>
  <v-container>
    <v-row justify="center" align="center">
      <!-- Logo and Icons -->
      <v-col cols="auto" class="d-flex align-center">
        <v-img :src="finasLogo" alt="Company Logo" max-width="50" />
      </v-col>

      <v-col cols="auto" class="d-flex justify-center">
        <a href="https://www.finas.de/" target="_blank">
          <v-icon class="icon">mdi-login</v-icon>
        </a>
      </v-col>

      <v-col cols="auto" class="d-flex justify-center">
        <a href="https://www.finas.de/fuer-kunden/" target="_blank">
          <v-icon class="icon">mdi-menu</v-icon>
        </a>
      </v-col>

      <v-col cols="auto" class="d-flex justify-center">
        <a href="https://www.finas.de/unternehmen/ansprechpartner/" target="_blank">
          <v-icon class="icon">mdi-information-outline</v-icon>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import finasLogo from '@/assets/images/finas_logo.png';
</script>

<style scoped>
.icon {
  font-size: 30px;
  cursor: pointer;
  color: #757575;
}

.icon:hover {
  color: #42a5f5;
}
</style>
