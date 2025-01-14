<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" class="text-center">
        <v-img src="https://via.placeholder.com/400" alt="404 Image" class="mb-4" />
        <h1>Oops! Page Not Found</h1>
        <p>Sorry, the page you are looking for doesn’t exist or has been moved. But don't worry, you can easily get back to where you need to go!</p>
        <v-btn color="primary" @click="goToHomePage">Back to Home</v-btn>
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
