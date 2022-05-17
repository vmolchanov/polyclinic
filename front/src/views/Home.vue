<template>
  <v-form @submit.prevent="onLogin">
    <v-text-field v-model="domainObject.email" label="Email" type="email"/>
    <v-text-field v-model="domainObject.password" label="Пароль" type="password"/>
    <div>
      <v-btn type="submit">Войти</v-btn>
      <v-btn text @click="onSignupClick">Регистрация</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    domainObject: {},
  }),
  methods: {
    onLogin() {
      this.$axios.post('/user/login', this.domainObject)
        .then(r => {
          localStorage.setItem('token', r.data.data);
          this.$router.push({name: 'Catalog'});
        });
    },
    onSignupClick() {
      this.$router.push({name: 'Signup'});
    }
  },
}
</script>
