<template>
  <div class="time-chooser">
    <v-chip
      v-for="(time, index) in getTimes"
      :key="index"
      :class="setClass(time)"
      @click="onClick(time)"
    >
      {{time}}
    </v-chip>
  </div>
</template>

<script>
export default {
  name: 'time-chooser',
  props: {
    reservedTimes: {
      type: Array,
    },
  },
  data: () => ({
    hours: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
    minutes: ['00', '15', '30', '45'],
    choosedTimes: {},
  }),
  created() {
    this.initChoosedTimes();
  },
  computed: {
    getTimes() {
      return this.hours.reduce((acc, hour) => {
        this.minutes.forEach(minute => {
          acc.push(`${hour}:${minute}`);
        });
        return acc;
      }, []);
    }
  },
  methods: {
    initChoosedTimes() {
      this.choosedTimes = {};
      this.getTimes.forEach(time => {
        if (!this.reservedTimes.includes(time)) {
          this.choosedTimes[time] = false;
        }
      });
    },
    setClass(time) {
      return {
        free: time in this.choosedTimes && this.choosedTimes[time],
        choosed: time in this.choosedTimes && !this.choosedTimes[time],
      };
    },
    onClick(time) {
      if (time in this.choosedTimes) {
        const temp = this.choosedTimes[time];
        for (let key in this.choosedTimes) {
          this.choosedTimes[key] = false;
        }
        this.choosedTimes[time] = !temp;
        this.$forceUpdate();
      }
      this.$emit('input', this.choosedTimes[time] ? time : null);
    }
  },
  watch: {
    reservedTimes() {
      this.initChoosedTimes();
    }
  }
}
</script>

<style scoped>
  .free {
    background-color: #dbb44f !important;
  }

  .choosed {
    background-color: #2aa22a !important;
  }
</style>
