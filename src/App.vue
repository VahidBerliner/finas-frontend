<template>
  <v-app>
    <NavigationDrawer />
    <ToolbarComponent />
    
    <!-- Main content of the app -->
    <v-main>
      <v-container>
        <!-- Logo section remains for branding or other purposes -->
        <LogoComponent />
        
        <!-- The router-view renders the active route component -->
        <router-view></router-view> <!-- This renders the component mapped in your routes -->
      </v-container>
    </v-main>
    
    <!-- Floating Action Button -->
    <FloatingButton @fabClicked="handleFabClick" />
    
    <!-- Footer component -->
    <FooterComponent />
  </v-app>
</template>

<script>
import NavigationDrawer from './components/common/NavigationDrawer.vue';
import ToolbarComponent from './components/common/ToolbarComponent.vue';
import FloatingButton from './components/common/FloatingButton.vue';
import FooterComponent from './components/common/FooterComponent.vue';
import LogoComponent from './components/common/LogoComponent.vue';

export default {
  components: {
    NavigationDrawer,
    ToolbarComponent,
    FloatingButton,
    FooterComponent,
    LogoComponent,
  },
  methods: {
    handleFabClick() {
      console.log("Floating Button Clicked!");
    },
  },
};
</script>

<style scoped>

</style>
