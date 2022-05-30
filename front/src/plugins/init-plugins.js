import axiosPlugin from './axios';

export const initPlugins = (Vue) => {
  Vue.use(axiosPlugin);
};
