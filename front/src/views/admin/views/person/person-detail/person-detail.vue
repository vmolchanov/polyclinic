<template>
  <section v-if="isContentLoaded">
    <h2>Пользователь</h2>
    <info-card
      entityName="person"
      :entityId="domainObject.id"
      :headers="headers"
      :items="domainObject"
    />
  </section>
</template>

<script>
export default {
  name: 'person-detail',
  data: () => ({
    domainObject: null,
    isContentLoaded: false,
    headers: {
      fullName: 'ФИО',
      email: 'Email',
      phone: 'Телефон',
    },
  }),
  created() {
    this.$axios
      .get(`/user/${this.$route.params.personId}`)
      .then(r => {
        this.domainObject = r.data;
        this.domainObject.fullName = this.getFullName(this.domainObject);
        this.isContentLoaded = true;
      });
  },
  methods: {
    getFullName({firstName, lastName, secondName}) {
      return `${lastName} ${firstName[0]}.${secondName ? secondName[0] + '.' : ''}`;
    }
  },
}
</script>

<style scoped>

</style>
