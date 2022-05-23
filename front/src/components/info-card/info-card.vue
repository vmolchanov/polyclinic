<template>
  <div class="info-card">
    <v-divider class="info-card__top-divider" />
    <v-row
      v-for="(item, index) in data" :key="index"
      align="center"
      class="info-card__row"
    >
      <v-col class="info-card__key-col" cols="6">{{item.key}}</v-col>
      <v-col class="info-card__value-col" cols="6">{{item.value}}</v-col>
    </v-row>
    <v-divider class="info-card__bottom-divider" />
    <v-btn text @click="onBackButtonClick">Назад</v-btn>
    <v-btn text @click="onEditClick">Изменить</v-btn>
  </div>
</template>

<script>
export default {
  name: 'info-card',
  props: {
    entityName: {
      type: String,
      required: true,
    },
    entityId: {
      type: String,
      required: true,
    },
    items: {
      type: Object,
      required: true,
    },
    headers: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    data: [],
  }),
  created() {
    for (let key in this.headers) {
      if (this.items[key]) {
        this.data.push({
          key: this.headers[key],
          value: this.items[key],
        });
      }
    }
  },
  methods: {
    onBackButtonClick() {
      this.$router.go(-1);
    },
    onEditClick() {
      this.$router.push({
        name: `${this.entityName[0].toUpperCase()}${this.entityName.slice(1)}Edit`,
        params: {
          [`${this.entityName}Id`]: this.entityId,
        },
      });
    }
  },
}
</script>

<style scoped>

.info-card__key-col {
  font-weight: bold;
}

.info-card__key-col,
.info-card__value-col{
  padding: 10px 20px;
  text-align: left;
}

.info-card__top-divider {
  margin-bottom: 12px;
}

.info-card__bottom-divider {
  margin-top: 12px;
}

</style>
