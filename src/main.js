import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import feather from 'vue-icon';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import store from './store';

Vue.use(VueScrollTo);
Vue.use(feather, 'v-icon');
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
