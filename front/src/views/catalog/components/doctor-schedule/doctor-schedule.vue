<template>
  <v-container>
    <h2>Расписание на сегодня</h2>
    <data-table
      v-if="domainObjects"
      :items="domainObjects"
      :headers="headers"
      entityName="reception"
      noRowClick
    />
  </v-container>
</template>

<script>
export default {
  name: 'doctor-schedule',
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
    }
  },
  methods: {
    getFullName({lastName, firstName, secondName}) {
      return `${lastName} ${firstName[0]}.${secondName ? secondName[0] + '.' : ''}`;
    },
    getCurrentUser() {
      return this.$axios
        .get('/user/current')
        .then(r => {
          return r.data;
        });
    }
  },
}
</script>

<style scoped>

</style>
