<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" class="text-center">
        <v-img src="https://via.placeholder.com/400" alt="404 Image" class="mb-4" />
        <h1>Ups! Seite nicht gefunden</h1>
        <br><br>
        <p>Entschuldigung, die Seite, die Sie suchen, existiert nicht oder wurde verschoben. Aber keine Sorge, Sie können ganz einfach dorthin zurückkehren, wo Sie hin müssen!</p>
        <br><br><br>
        <v-btn color="primary" @click="goToHomePage">Zurück zur Startseite</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    // This method will redirect the user to the homepage when they click the button
    goToHomePage() {
      this.$router.push('/');
    }
  },
};
</script>

<style scoped>
/* Optional: Customize styles such as text color, button style, etc. */
</style>
