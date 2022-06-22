<template>
  <v-container>
    <h2>Мои приемы</h2>
    <data-table
      v-if="isDataLoaded"
      :items="domainObjects"
      :headers="headers"
      entityName="reception"
      noRowClick
      @rowClick="onRowClick"
    />
  </v-container>
</template>

<script>
import TextFormatMixin from '@/mixins/text-format';

export default {
  name: 'reception-table',
  mixins: [TextFormatMixin],
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.$axios.get(`/reception/patient/${this.currentUser.id}`)
      .then(r => {
        this.domainObjects = r.data;
        this.domainObjects.forEach(domainObject => {
          domainObject.datetime = `${this.getDate(domainObject.date)}, ${domainObject.time}`;
          domainObject.doctorFullName = this.getFullName(domainObject.user);
        });
        this.isDataLoaded = true;
      });
  },
  data() {
    return {
      domainObjects: null,
      headers: [
        {text: 'Дата', value: 'datetime'},
        {text: 'ФИО врача', value: 'doctorFullName'},
        {text: 'Специализация', value: 'user.post.title'}
      ],
      isDataLoaded: false,
    };
  },
  methods: {
    onRowClick({id}) {
      this.$router.push({
        name: 'Reception',
        params: {
          receptionId: id,
        }
      });
    },
  },
}
</script>

<style scoped>

</style>
