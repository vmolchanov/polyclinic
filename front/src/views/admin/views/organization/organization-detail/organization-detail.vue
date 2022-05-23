<template>
  <section v-if="isContentLoaded">
    <h2>Организация</h2>
    <info-card
      entityName="organization"
      :entityId="domainObject.id"
      :headers="headers"
      :items="domainObject"
    />
  </section>
</template>

<script>
export default {
  name: 'organization-detail',
  data: () => ({
    domainObject: null,
    isContentLoaded: false,
    headers: {
      title: 'Наименование',
      address: 'Адрес',
      phone: 'Телефон',
    },
  }),
  created() {
    this.$axios
      .get(`/organization/${this.$route.params.organizationId}`)
      .then(r => {
        this.domainObject = r.data;
        this.isContentLoaded = true;
      });
  }
}
</script>

<style scoped>

</style>
