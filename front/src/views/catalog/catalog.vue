<template>
  <component :is="getComponent"/>
</template>

<script>
import DoctorList from './components/doctor-list/doctor-list';
import DoctorSchedule from './components/doctor-schedule/doctor-schedule';

export default {
  name: 'catalog',
  data: () => ({
    component: {
      doctor: DoctorSchedule,
      patient: DoctorList,
    },
    currentUser: null,
  }),
  created() {
    this.$axios
      .get('/user/current')
      .then(r => {
        this.currentUser = r.data;
      });
  },
  computed: {
    getComponent() {
      if (this?.currentUser?.role?.value in this.component) {
        return this.component[this?.currentUser?.role?.value];
      }
      return null;
    },
  },
}
</script>

<style scoped>

</style>
