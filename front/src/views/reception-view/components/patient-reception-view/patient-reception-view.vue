<template>
  <v-container>
    <component :is="getComponent" :currentUser="currentUser"/>
  </v-container>
</template>

<script>
import ReceptionCard from './components/reception-card/reception-card';
import ReceptionTable from './components/receptions-table/reception-table';

export default {
  name: 'patient-reception-view',
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getComponent() {
      return this.$route.params.receptionId === undefined ? ReceptionTable : ReceptionCard;
    },
  },
}
</script>

<style scoped>

</style>
