<template>
  <section v-if="isContentLoaded">
    <h2>{{getTitle}}</h2>
    <v-form @submit.prevent="onFormSubmit">
      <v-text-field
        label="Фамилия"
        v-model="domainObject.lastName"
      />
      <v-text-field
        label="Имя"
        v-model="domainObject.firstName"
      />
      <v-text-field
        label="Отчество"
        v-model="domainObject.secondName"
      />
      <v-text-field
        label="Email"
        v-model="domainObject.email"
      />
      <v-text-field
        label="Телефон"
        v-model="domainObject.phone"
      />
      <v-text-field
        label="Кабинет"
        v-model="domainObject.cabinet"
      />
      <v-select
        v-model="domainObject.role"
        :items="roles"
        item-text="value"
        item-value="id"
        label="Роль"
        persistent-hint
        return-object
        single-line
      />
      <v-select
        v-model="domainObject.organization"
        :items="organizations"
        item-text="title"
        item-value="id"
        label="Организация"
        persistent-hint
        return-object
        single-line
      />
      <v-select
        v-model="domainObject.post"
        :items="posts"
        item-text="title"
        item-value="id"
        label="Должность"
        persistent-hint
        return-object
        single-line
      />
      <v-btn type="submit">Сохранить</v-btn>
    </v-form>
  </section>
</template>

<script>
export default {
  name: 'person-edit',
  data: () => ({
    domainObject: {},
    isContentLoaded: false,
    roles: [],
    organizations: [],
    posts: [],
  }),
  created() {
    if (this.$route.params.personId) {
      this.$axios
        .get(`/user/${this.$route.params.personId}`)
        .then(r => {
          this.domainObject = r.data;
          this.initRelationship();
        });
    } else {
      this.initRelationship();
    }
  },
  computed: {
    getTitle() {
      return this.$route.params.personId
        ? 'Редактировать персону'
        : 'Создать новую персону';
    },
  },
  methods: {
    initRoles() {
      return this.$axios
        .get('/role')
        .then(r => {
          this.roles = r.data;
        });
    },
    initOrganizations() {
      return this.$axios
        .get('/organization')
        .then(r => {
          this.organizations = r.data;
        });
    },
    initPosts() {
      return this.$axios
        .get('/post')
        .then(r => {
          this.posts = r.data;
        });
    },
    initRelationship() {
      Promise.all([
        this.initRoles(),
        this.initOrganizations(),
        this.initPosts(),
      ]).then(() => {
        this.isContentLoaded = true;
      });
    },
    onFormSubmit() {
      const promise = this.$route.params.personId
        ? this.$axios.put('/user', this.domainObject)
        : this.$axios.post('/user', this.domainObject);

      promise.then(() => {
        this.$router.go(-1);
      });
    }
  },
}
</script>

<style scoped>

</style>
