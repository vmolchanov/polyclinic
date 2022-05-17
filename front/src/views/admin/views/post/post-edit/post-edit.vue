<template>
  <section>
    <h2>Создать новую должность</h2>
    <v-form @submit.prevent="onFormSubmit">
      <v-text-field
        label="Наименование"
        v-model="domainObject.title"
      />
      <v-btn type="submit">Сохранить</v-btn>
    </v-form>
  </section>
</template>

<script>
export default {
  name: 'post-edit',
  data: () => ({
    domainObject: {},
  }),
  methods: {
    onFormSubmit() {
      this.$axios
        .post('/post', this.domainObject)
        .then(() => {
          this.$router.go(-1);
        });
    }
  },
}
</script>

<style scoped>

</style>
