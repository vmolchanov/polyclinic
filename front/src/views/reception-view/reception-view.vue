<template>
  <component :is="getComponent" :currentUser="currentUser"/>
</template>

<script>
import DoctorReceptionView from './components/doctor-reception-view/doctor-reception-view';
import PatientReceptionView from './components/patient-reception-view/patient-reception-view';

export default {
  name: 'reception',
  created() {
    this.getCurrentUser();
  },
  data() {
    return {
      component: {
        doctor: DoctorReceptionView,
        patient: PatientReceptionView,
      },
      currentUser: null,
    };
  },
  computed: {
    getComponent() {
      if (this.currentUser?.role?.value in this.component) {
        return this.component[this.currentUser.role.value];
      }
      return null;
    },
  },
  methods: {
    getCurrentUser() {
      return this.$axios
        .get('/user/current')
        .then(r => {
          this.currentUser = r.data;
        });
    }
  },
}
</script>

<style scoped>

</style>
