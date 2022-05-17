<template>
  <section>
    <h2>Создать новую организацию</h2>
    <v-form @submit.prevent="onFormSubmit">
      <v-text-field
        label="Наименование"
        v-model="domainObject.title"
      />
      <v-text-field
        label="Адрес"
        v-model="domainObject.address"
      />
      <v-text-field
        label="Телефон"
        v-model="domainObject.phone"
      />
      <v-btn type="submit">Сохранить</v-btn>
    </v-form>
  </section>
</template>

<script>
export default {
  name: 'organization-edit',
  data: () => ({
    domainObject: {},
  }),
  methods: {
    onFormSubmit() {
      this.$axios
        .post('/organization', this.domainObject)
        .then(() => {
          this.$router.go(-1);
        });
    }
  },
}
</script>

<style scoped>

</style>
