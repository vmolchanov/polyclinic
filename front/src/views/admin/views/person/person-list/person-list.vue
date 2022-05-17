<template>
  <section>
    <h2>Персоны</h2>
    <v-skeleton-loader
      v-if="!isContentLoaded"
      type="table-heading, list-item-two-line, image, table-tfoot"
    />
    <div v-else>
      <div class="buttons-block">
        <router-link :to="{name: 'PostNew'}">Добавить</router-link>
      </div>
      <p v-if="domainObjects.length === 0">Нет данных</p>
      <data-table
        v-else
        :items="domainObjects"
        :headers="headers"
        entityName="post"
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
      {text: 'Наименование', value: 'title'},
    ],
  }),
  created() {
    this.$axios
      .get('/user')
      .then(r => {
        this.domainObjects = r.data;
        this.isContentLoaded = true;
      });
  },
};

</script>

<style scoped>

</style>
