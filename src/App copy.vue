<template>
  <v-app>
    <NavigationDrawer />
    <ToolbarComponent />
    
    <!-- The router-view will render the component for the current route -->
    <v-main>
      <v-container>
        <!-- Logo and Form section only appear on the default route -->
        <LogoComponent />
        <FormComponent />
        
        <!-- The AboutPage content will be displayed when the '/about' route is active -->
        <router-view></router-view>  <!-- This is where the AboutPage or other route components will render -->
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
import FormComponent from './components/FormComponent.vue';
import FloatingButton from './components/common/FloatingButton.vue';
import FooterComponent from './components/common/FooterComponent.vue';
import LogoComponent from './components/common/LogoComponent.vue';

export default {
  components: {
    NavigationDrawer,
    ToolbarComponent,
    FormComponent,
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
/* Global Styles can go here */
</style>
