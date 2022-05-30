<template>
  <section>
    <h2>Организации</h2>
    <v-skeleton-loader
      v-if="!isContentLoaded"
      type="table-heading, list-item-two-line, image, table-tfoot"
    />
    <div class="organization" v-else>
      <div class="buttons-block">
        <router-link :to="{name: 'OrganizationNew'}">Добавить</router-link>
      </div>
      <p v-if="domainObjects.length === 0">Нет данных</p>
      <data-table
        v-else
        :items="domainObjects"
        :headers="headers"
        entityName="organization"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'organization-list',
  data: () => ({
    domainObjects: null,
    isContentLoaded: false,
    headers: [
      {text: 'Наименование', value: 'title'},
    ],
  }),
  created() {
    this.$axios
      .get('/organization')
      .then(r => {
        this.domainObjects = r.data;
        this.isContentLoaded = true;
      });
  }
}
</script>

<style scoped>
  .buttons-block {
    margin-bottom: 20px;
  }
</style>
