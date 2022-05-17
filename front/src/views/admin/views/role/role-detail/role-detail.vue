<template>
  <section v-if="isContentLoaded">
    <h2>Роль</h2>
    <info-card
      :headers="headers"
      :items="domainObject"
    />
  </section>
</template>

<script>
export default {
  name: 'role-detail',
  data: () => ({
    domainObject: null,
    isContentLoaded: false,
    headers: {
      value: 'Наименование',
    },
  }),
  created() {
    this.$axios
      .get(`/role/${this.$route.params.roleId}`)
      .then(r => {
        this.domainObject = r.data;
        this.isContentLoaded = true;
      });
  }
}
</script>

<style scoped>

</style>
