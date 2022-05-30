<template>
  <section v-if="isContentLoaded">
    <h2>Должность</h2>
    <info-card
      entityName="post"
      :entityId="domainObject.id"
      :headers="headers"
      :items="domainObject"
    />
  </section>
</template>

<script>
export default {
  name: 'post-detail',
  data: () => ({
    domainObject: null,
    isContentLoaded: false,
    headers: {
      title: 'Наименование',
    },
  }),
  created() {
    this.$axios
      .get(`/post/${this.$route.params.postId}`)
      .then(r => {
        this.domainObject = r.data;
        this.isContentLoaded = true;
      });
  }
}
</script>

<style scoped>

</style>
