<template>
  <v-container v-if="isDataLoaded">
    <v-form @submit.prevent="onFormSubmit">
      <v-textarea
        solo
        label="Результат приема"
        v-model="reception.review"
      />
      <v-btn class="mr-4" @click="onScheduleButtonClick">К расписанию</v-btn>
      <v-btn color="green"  type="submit">Отправить</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import TextFormatMixin from '../../../../mixins/text-format';

export default {
  name: 'doctor-reception-view',
  mixins: [TextFormatMixin],
  created() {
    this.getReception();
  },
  data() {
    return {
      isDataLoaded: false,
      reception: null,
    };
  },
  methods: {
    getReception() {
      this.$axios
        .get(`/reception/${this.$route.params.receptionId}`)
        .then(r => {
          this.reception = r.data;
          this.isDataLoaded = true;
        });
    },
    onFormSubmit() {
      this.$axios
        .put('/reception', {
          ...this.reception,
          date: this.getDate(this.reception.date),
        })
        .then(() => {
          alert('Изменения сохранены');
        });
    },
    onScheduleButtonClick() {
      this.$router.push({name: 'Catalog'});
    },
  },
}
</script>

<style scoped>

</style>
