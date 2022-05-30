<template>
  <header class="admin-header">
    <v-container>
      <div class="user-block">
        <router-link
          :to="{name: 'Catalog'}"
          class="admin-header__link"
        >
          Вернуться в каталог
        </router-link>
      </div>
    </v-container>
  </header>
</template>

<script>
export default {
  name: 'admin-header',
};
</script>

<style scoped>
.admin-header {
  background-color: darkblue;
}

.admin-header__link {
  color: white;
  text-decoration: none;
}
</style>
