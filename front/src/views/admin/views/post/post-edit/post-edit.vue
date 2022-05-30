<template>
  <section v-if="isContentLoaded">
    <h2>{{getTitle}}</h2>
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
    isContentLoaded: false,
  }),
  created() {
    if (this.$route.params.postId) {
      this.$axios
        .get(`/post/${this.$route.params.postId}`)
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
      return this.$route.params.postId
        ? 'Редактировать должность'
        : 'Создать новую должность';
    },
  },
  methods: {
    onFormSubmit() {
      const promise = this.$route.params.postId
        ? this.$axios.put('/post', this.domainObject)
        : this.$axios.post('/post', this.domainObject);

      promise.then(() => {
        this.$router.go(-1);
      });
    },
  },
}
</script>

<style scoped>

</style>
