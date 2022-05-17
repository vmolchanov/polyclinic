import App from './App.vue';
import router from './router';
import store from './store';
import Vue from 'vue';

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import {initPlugins} from './plugins/init-plugins';
import {initComponents} from './components/init-components';

Vue.use(Vuetify)

const vuetify = new Vuetify();

initPlugins(Vue);
initComponents(Vue);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')

