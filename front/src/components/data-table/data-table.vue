<template>
  <div class="data-table">
    <v-data-table
      :headers="headers"
      :items="items"
      @click:row="onRowClick"
    />
  </div>
</template>

<script>

export default {
  name: 'data-table',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    entityName: {
      type: String,
      required: true,
    },
    noRowClick: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onRowClick(data) {
      this.$emit('rowClick', data);
      if (this.noRowClick) {
        return;
      }
      this.$router.push({
        name: `${this.entityName[0].toUpperCase() + this.entityName.slice(1)}Detail`,
        params: {
          [`${this.entityName}Id`]: data.id
        }
      });
    }
  }
};

</script>
