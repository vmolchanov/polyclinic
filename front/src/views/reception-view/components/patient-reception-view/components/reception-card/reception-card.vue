<template>
  <v-container v-if="isDataLoaded">
    <h2 class="mb-4">Заключение</h2>
    <p v-text="getReview"/>
    <v-btn @click="onBackButtonClick">Назад</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'reception-card',
  created() {
    this.$axios
      .get(`/reception/${this.$route.params.receptionId}`)
      .then(r => {
        this.domainObject = r.data;
        this.isDataLoaded = true;
      });
  },
  data() {
    return {
      domainObject: null,
      isDataLoaded: false,
    };
  },
  computed: {
    getReview() {
      return this.domainObject.review ?? 'Врач пока не оставил записей';
    },
  },
  methods: {
    onBackButtonClick() {
      this.$router.push({name: 'Reception'});
    },
  },
}
</script>

<style scoped>

</style>
