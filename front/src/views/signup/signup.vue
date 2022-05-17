<template>
  <section>
    <h2>Регистрация</h2>
    <v-form @submit.prevent="onSignup">
      <v-text-field v-model="domainObject.lastName" label="Фамилия"/>
      <v-text-field v-model="domainObject.firstName" label="Имя"/>
      <v-text-field v-model="domainObject.secondName" label="Отчество"/>
      <v-text-field v-model="domainObject.phone" label="Телефон"/>
      <v-text-field v-model="domainObject.email" label="Email"/>
      <v-text-field v-model="domainObject.password" label="Пароль"/>
      <v-btn type="submit">Зарегистрироваться</v-btn>
    </v-form>
  </section>
</template>

<script>
export default {
  name: 'signup',
  data: () => ({
    domainObject: {},
  }),
  methods: {
    onSignup() {
      this.$axios
        .post('/user/signup', this.domainObject)
        .then(r => {
          localStorage.setItem('token', r.data.data);
          this.$router.push({name: 'Catalog'});
        });
    },
  },
}
</script>

<style scoped>

</style>
