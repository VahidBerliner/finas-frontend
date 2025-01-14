<template>
  <v-btn v-if="showButton" fab @click="onButtonClick" class="floating-button">
    <v-icon>mdi-phone-classic</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "FloatingButton",
  data() {
    return {
      showButton: true,
    };
  },
  methods: {
    onButtonClick() {
      window.location.href = "tel:03491-4334-0";
    },
  },
};
</script>

<style scoped>
.floating-button {
  position: fixed;
  right: 40px;
  top: 50%;
  transform: translateY(-30%);
  z-index: 1000;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #85888a, #6a6c6e);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.4s ease;
}

.floating-button:hover {
  background: linear-gradient(135deg, #4c51dd, #363ce8);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
}

.floating-button .v-icon {
  font-size: 35px;
  color: #fff;
}
</style>
