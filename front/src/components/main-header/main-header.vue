<template>
  <header class="main-header">
    <v-container>
      <div class="user-block">
        <router-link
          :to="{name: 'Admin'}"
          class="main-header__link"
        >
          Панель администратора
        </router-link>
      </div>
    </v-container>
  </header>
</template>

<script>
export default {
  name: 'main-header',
};
</script>

<style scoped>
  .main-header {
    background-color: darkblue;
  }

  .main-header__link {
    color: white;
    text-decoration: none;
  }
</style>
