<template>
  <v-container>
    <h2>Расписание на сегодня</h2>
    <data-table
      v-if="domainObjects"
      :items="domainObjects"
      :headers="headers"
      entityName="reception"
      noRowClick
      @rowClick="onRowClick"
    />
  </v-container>
</template>

<script>
import TextFormatMixin from '../../../../mixins/text-format';

export default {
  name: 'doctor-schedule',
  mixins: [TextFormatMixin],
  created() {
    this.getCurrentUser()
      .then(user => {
        const params = {
          user: user.id
        };
        return this.$axios.get(`/reception/reserved/${this.getCurrentDate}`, {params});
      })
      .then(r => {
        this.domainObjects = r.data;
        this.domainObjects.forEach(domainObject => {
          domainObject.patient.fullName = this.getFullName(domainObject.patient);
        });
      });
  },
  data: () => ({
    headers: [
      {text: 'Время', value: 'time'},
      {text: 'Пациент', value: 'patient.fullName'},
    ],
    domainObjects: [],
  }),
  computed: {
    getCurrentDate() {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();
      return `${year}-${month}-${day}`;
    },
  },
  methods: {
    getCurrentUser() {
      return this.$axios
        .get('/user/current')
        .then(r => {
          return r.data;
        });
    },
    onRowClick({id}) {
      this.$router.push({
        name: 'Reception',
        params: {
          receptionId: id,
        },
      });
    },
  },
}
</script>

<style scoped>

</style>
