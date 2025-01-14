<template>
  <v-navigation-drawer
    expand-on-hover
    rail
    permanent
    class="navigation-drawer"
  >
    <!-- User Profile -->
    <v-list>
      <img :src="require('@/assets/images/NavigationDrawer_logo.png')" alt="Company Logo" />
      <v-list-item
        subtitle="Versicherungsmakler"
        title="FINAS"
      ></v-list-item>
    </v-list>

    <!-- Divider -->
    <v-divider></v-divider>

    <!-- Navigation Links -->
    <v-list density="compact" nav>
      <router-link to="/kunden-suchen" class="router-link-no-style">
        <v-list-item prepend-icon="mdi-magnify" title="Kunden Suchen" value="search"></v-list-item>
      </router-link>

      <router-link to="/kunden-info" class="router-link-no-style">
        <v-list-item prepend-icon="mdi-account" title="Kunden Info" value="view-details"></v-list-item>
      </router-link>

      <router-link to="/kunde-bearbeiten" class="router-link-no-style">
        <v-list-item prepend-icon="mdi-pencil" title="Kunde Bearbeiten" value="edit"></v-list-item>
      </router-link>

      <router-link to="/kunden-hinzufuegen" class="router-link-no-style">
        <v-list-item prepend-icon="mdi-account-plus" title="Kunden Hinzufügen" value="add"></v-list-item>
      </router-link>

      <router-link to="/kunden-loeschen" class="router-link-no-style">
        <v-list-item prepend-icon="mdi-delete" title="Kunden Löschen" value="delete"></v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
};
</script>

<style scoped>
/* Custom styles to remove the vertical line */
.navigation-drawer {
  height: 100vh; /* Full screen height */
  background-color: #f5f5f5; /* Subtle light gray for the drawer */
  box-shadow: none; /* Remove the default shadow */
  border-right: none; /* Remove any border on the right */
}

.v-list-item:hover {
  background-color: #e3f2fd; /* Light blue hover effect */
}

.router-link-no-style {
  text-decoration: none;
  color: inherit;
}
</style>
