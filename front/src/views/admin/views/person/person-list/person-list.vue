<template>
  <section>
    <h2>Персоны</h2>
    <v-skeleton-loader
      v-if="!isContentLoaded"
      type="table-heading, list-item-two-line, image, table-tfoot"
    />
    <div v-else>
      <div class="buttons-block">
        <router-link :to="{name: 'PersonNew'}">Добавить</router-link>
      </div>
      <p v-if="domainObjects.length === 0">Нет данных</p>
      <data-table
        v-else
        :items="domainObjects"
        :headers="headers"
        entityName="person"
      />
    </div>
  </section>
</template>

<script>

export default {
  name: 'person-list',
  data: () => ({
    domainObjects: null,
    isContentLoaded: false,
    headers: [
      {text: 'ФИО', value: 'fullName'},
      {text: 'Email', value: 'email'},
      {text: 'role', value: 'role.value'},
    ],
  }),
  created() {
    this.$axios
      .get('/user')
      .then(r => {
        this.domainObjects = r.data;
        this.domainObjects.forEach(domainObject => {
          domainObject.fullName = this.getFullName(domainObject);
        });
        this.isContentLoaded = true;
      });
  },
  methods: {
    getFullName({firstName, lastName, secondName}) {
      return `${lastName} ${firstName[0]}.${secondName ? secondName[0] + '.' : ''}`;
    }
  },
};

</script>

<style scoped>

</style>
