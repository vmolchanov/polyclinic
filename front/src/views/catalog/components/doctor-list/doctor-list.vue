<template>
  <v-container>
    <h1 class="mb-4">Наши врачи</h1>
    <v-card
      max-width="344"
      v-for="(doctor, index) in domainObjects" :key="index"
    >
      <v-card-text>
        <div>{{doctor.post ? doctor.post.title : 'Врач общей категории'}}</div>
        <p class="text-h4 text--primary">
          {{ getFullName(doctor) }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
          @click="onClick(doctor.id)"
        >
          Подробнее
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'doctor-list',
  data: () => ({
    domainObjects: [],
  }),
  created() {
    this.$axios
      .get('/user/role/doctor')
      .then(r => {
        this.domainObjects = r.data;
      });
  },
  methods: {
    getFullName({lastName, firstName, secondName}) {
      return `${lastName} ${firstName[0]}.${secondName ? secondName[0] + '.' : ''}`;
    },
    onClick(id) {
      this.$router.push({
        name: 'CatalogDoctorCard',
        params: {
          userId: id,
        }
      });
    },
  }
}
</script>

<style scoped>

</style>
