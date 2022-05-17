<template>
  <section>
    <h2>Создать новую роль</h2>
    <v-form @submit.prevent="onFormSubmit">
      <v-text-field
        label="Наименование"
        v-model="domainObject.value"
      />
      <v-btn type="submit">Сохранить</v-btn>
    </v-form>
  </section>
</template>

<script>
export default {
  name: 'role-edit',
  data: () => ({
    domainObject: {},
  }),
  methods: {
    onFormSubmit() {
      this.$axios
        .post('/role', this.domainObject)
        .then(() => {
          this.$router.go(-1);
        });
    }
  },
}
</script>

<style scoped>

</style>
