<template>
  <section v-if="isContentLoaded">
    <h2>{{getTitle}}</h2>
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
    isContentLoaded: false,
  }),
  created() {
    if (this.$route.params.roleId) {
      this.$axios
        .get(`/role/${this.$route.params.roleId}`)
        .then(r => {
          this.domainObject = r.data;
          this.isContentLoaded = true;
        });
    } else {
      this.isContentLoaded = true;
    }
  },
  computed: {
    getTitle() {
      return this.$route.params.roleId
        ? 'Редактировать роль'
        : 'Создать новую роль';
    },
  },
  methods: {
    onFormSubmit() {
      const promise = this.$route.params.roleId
        ? this.$axios.put('/role', this.domainObject)
        : this.$axios.post('/role', this.domainObject);

      promise.then(() => {
        this.$router.go(-1);
      });
    },
  },
}
</script>

<style scoped>

</style>
