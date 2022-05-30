<template>
  <section>
    <h2>Роли</h2>
    <v-skeleton-loader
      v-if="!isContentLoaded"
      type="table-heading, list-item-two-line, image, table-tfoot"
    />
    <div class="organization" v-else>
      <div class="buttons-block">
        <router-link :to="{name: 'RoleNew'}">Добавить</router-link>
      </div>
      <p v-if="domainObjects.length === 0">Нет данных</p>
      <data-table
        v-else
        :items="domainObjects"
        :headers="headers"
        entityName="role"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'role-list',
  data: () => ({
    domainObjects: null,
    isContentLoaded: false,
    headers: [
      {text: 'Наименование', value: 'value'},
    ],
  }),
  created() {
    this.$axios
      .get('/role')
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
