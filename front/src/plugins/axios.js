import api from '../config/axios';

export default {
  install(Vue) {
    Vue.prototype.$axios = api;
  }
};
