import DataTable from './data-table/data-table';
import InfoCard from './info-card/info-card';

export const initComponents = Vue => {
  Vue.component('data-table', DataTable);
  Vue.component('info-card', InfoCard);
};
