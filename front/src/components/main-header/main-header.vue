<template>
  <header class="main-header" v-if="isLoggedIn">
    <v-container>
      <div class="user-block">
        <router-link
          v-if="isAdmin"
          :to="{name: 'Admin'}"
          class="main-header__link"
        >
          Панель администратора
        </router-link>
        <router-link
          v-if="isPatient"
          :to="{name: 'Reception'}"
          class="main-header__link"
        >
          Мои приемы
        </router-link>
        <v-btn text class="ml-5 main-header__logout" @click="logout">Выйти</v-btn>
      </div>
    </v-container>
  </header>
</template>

<script>
export default {
  name: 'main-header',
  created() {
    this.$axios('/user/current')
      .then(r => {
        this.currentUser = r.data;
      });
  },
  data: () => ({
    currentUser: null,
  }),
  computed: {
    isLoggedIn() {
      return Boolean(localStorage.getItem('token'));
    },
    isAdmin() {
      return this?.currentUser?.role?.value === 'admin';
    },
    isPatient() {
      return this?.currentUser?.role?.value === 'patient';
    },
    isNotLoginPage() {
      return this.$route.name !== 'Home';
    }
  },
  methods: {
    logout() {
      this.$axios
        .delete('/user/logout')
        .then(() => {
          localStorage.removeItem('token');
          this.$router.push({name: 'Home'});
        });
    },
  },
};
</script>

<style scoped>
  .main-header {
    background-color: darkblue;
  }

  .main-header__logout {
    color: white !important;
  }

  .main-header__link {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
  }

  .user-block {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>
