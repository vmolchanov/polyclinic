<template>
  <section v-if="isContentLoaded">
    <h2>{{getTitle}}</h2>
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
    isContentLoaded: false,
  }),
  created() {
    if (this.$route.params.organizationId) {
      this.$axios
        .get(`/organization/${this.$route.params.organizationId}`)
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
      return this.$route.params.organizationId
        ? 'Редактировать организацию'
        : 'Создать новую организацию';
    }
  },
  methods: {
    onFormSubmit() {
      const promise = this.$route.params.organizationId
        ? this.$axios.put('/organization', this.domainObject)
        : this.$axios.post('/organization', this.domainObject);

      promise.then(() => {
        this.$router.go(-1);
      });
    }
  },
}
</script>

<style scoped>

</style>
