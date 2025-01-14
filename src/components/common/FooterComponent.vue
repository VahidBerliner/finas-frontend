<template>
  <v-footer height="auto" padless class="footer-container">
    <v-row align="center" justify="center" class="py-5">
      <!-- Branding and Slogan -->
      <v-col class="text-right" cols="12" sm="3">
        <span class="headline black--text small-font">© FINAS Versicherungsmakler GmbH</span>
      </v-col>

      <!-- Useful Links -->
      <v-col class="text-center" cols="12" sm="2">
        <v-btn icon @click="openLink('https://www.finas.de/kontakt/')" class="mx-4 circular-btn">
          <v-icon>mdi-information</v-icon>
        </v-btn>
        <v-btn icon @click="openLink('tel:03491-4334-0')" class="mx-4 circular-btn">
          <v-icon>mdi-phone</v-icon>
        </v-btn>
        <v-btn icon @click="openLink('mailto:info@finas.de')" class="mx-4 circular-btn">
          <v-icon>mdi-email</v-icon>
        </v-btn>
      </v-col>

      <!-- Social Media Icons -->
      <v-col class="text-center" cols="12" sm="2">
        <v-icon class="social-icon" @click="openLink('https://twitter.com/yourbrand')">mdi-twitter</v-icon>
        <v-icon class="social-icon" @click="openLink('https://instagram.com/yourbrand')">mdi-instagram</v-icon>
        <v-icon class="social-icon" @click="openLink('https://linkedin.com/company/yourbrand')">mdi-linkedin</v-icon>
        <v-icon class="social-icon" @click="openLink('https://facebook.com/yourbrand')">mdi-facebook</v-icon>
      </v-col>

      <!-- Address -->
      <v-col class="text-center" cols="12" sm="3">
        <a href="https://www.google.com/maps?q=FINAS+Versicherungsmakler+GmbH,+Breitscheidstr.+33,+D+-+06886+Lutherstadt+Wittenberg" target="_blank" class="address-link">
        <p style="font-size: 0.8rem;">FINAS Versicherungsmakler GmbH</p>
          <v-icon color="blue" class="mr-2">mdi-map-marker</v-icon>
          <span class="black--text">
            Breitscheidstr. 33,<br />D - 06886 Lutherstadt Wittenberg
          </span>
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  methods: {
    openLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.footer-container {
  background-color: #f9fafb;
}

.v-btn.circular-btn {
  background-color: #535757;
  color: white;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
}

.v-btn.circular-btn:hover {
  background-color: #2709ce;
  transform: scale(1.2);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.v-icon.social-icon {
  font-size: 2rem;
  cursor: pointer;
  color: #7b7c7c;
  margin: 0 12px;
  transition: color 0.3s ease;
}

.v-icon.social-icon:hover {
  color: #5b0ece;
}

.address-link {
  text-decoration: none;
  color: inherit;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  transition: color 0.3s ease;
}

.address-link:hover {
  color: #1e88e5;
}

.v-icon {
  font-size: 24px;
}

.v-col {
  padding: 10px;
}

.small-font {
  font-size: 0.7rem;
  text-align: center;
}
</style>
