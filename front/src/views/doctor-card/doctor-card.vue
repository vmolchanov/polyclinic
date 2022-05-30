<template>
  <v-container class="doctor-card">
    <article class="doctor-card__info mb-4" v-if="doctor">
      <h2>Информация о враче</h2>
      <v-row no-gutters>
        <v-col cols="4">Имя</v-col>
        <v-col cols="8">{{doctor.lastName}}</v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="4">Email</v-col>
        <v-col cols="8">{{doctor.email}}</v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="4">Телефон</v-col>
        <v-col cols="8">{{doctor.phone}}</v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="4">Должность</v-col>
        <v-col cols="8">{{doctor.post ? doctor.post.title : 'Врач общей категории'}}</v-col>
      </v-row>
    </article>
    <section>
      <h2>Запись к врачу</h2>
      <v-form action="#" class="doctor-card__appointment" @submit.prevent="onFormSubmit">
        <v-text-field v-model="domainObject.name" label="ФИО"/>
        <v-text-field v-model="domainObject.email" label="Email" type="email"/>

        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{on, attrs}">
            <v-text-field
              v-model="domainObject.date"
              label="Дата"
              readonly
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker v-model="domainObject.date" @input="onDateInput"/>
        </v-menu>

        <TimeChooser v-if="isShowTimeChooser" v-model="domainObject.time" :reservedTimes="reservedTimes"/>

        <v-btn class="mr-4" @click="onBackButtonClick">В каталог</v-btn>
        <v-btn color="green" type="submit">Записаться</v-btn>
      </v-form>
    </section>
  </v-container>
</template>

<script>
import TimeChooser from './components/time-chooser/time-chooser';

export default {
  name: 'doctor-card',
  components: {
    TimeChooser,
  },
  created() {
    Promise.all([
      this.$axios(`/user/${this.$route.params.userId}`),
      this.$axios(`/user/current`)
    ]).then(([doctorResponse, currentUserResponse]) => {
      this.doctor = doctorResponse.data;
      this.currentUser = currentUserResponse.data;

      const {lastName, firstName, secondName, email} = this.currentUser;
      this.domainObject.name = `${lastName} ${firstName}${secondName ? ' ' + secondName : ''}`;
      this.domainObject.email = email;
    });
  },
  data: () => ({
    menu2: false,
    doctor: null,
    domainObject: {},
    currentUser: null,
    reservedTimes: [],
    isShowTimeChooser: false,
  }),
  methods: {
    onFormSubmit() {
      this.$axios
        .post('/reception', {
          ...this.domainObject,
          user: this.$route.params.userId,
          patient: this.currentUser.id,
        });
    },
    onDateInput(date) {
      this.menu2 = false;
      const params = {
        user: this.$route.params.userId,
      };
      this.$axios
        .get(`/reception/reserved/${date}`, {params})
        .then(r => {
          this.reservedTimes = r.data.map(reception => reception.time);
          this.isShowTimeChooser = true;
        });
    },
    onBackButtonClick() {
      this.$router.push({name: 'Catalog'});
    }
  },
}
</script>

<style scoped>

</style>
