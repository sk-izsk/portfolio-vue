import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueParticlesBg from 'particles-bg-vue';
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VueGtag from 'vue-gtag';
import feather from 'vue-icon';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import store from './store';

if (process.env.NODE_ENV !== 'development') {
  Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS,
  });
  Vue.use(VueGtag, {
    config: { id: process.env.VUE_APP_GOOGLE_ANALYTICS },
  });
}

Vue.use(VueScrollTo);
Vue.use(VueParticlesBg);
Vue.use(feather, 'v-icon');
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
