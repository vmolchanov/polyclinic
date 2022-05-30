<template>
  <v-app class="App">
    <div class="App__content">
      <main-header class="App__header" v-if="!$route.path.includes('/admin') && isNotLoginPage"/>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import MainHeader from './components/main-header/main-header';

export default {
  name: 'app',
  components: {
    MainHeader,
  },
  computed: {
    isNotLoginPage() {
      return this.$route.name !== 'Home';
    }
  },
};
</script>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .App__header {
    width: 100%;
  }
</style>
