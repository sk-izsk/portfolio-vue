<template>
  <div v-if="!isCallingServe" id="app">
    <Home />
    <NavBar />
    <About />
  </div>
</template>

<script>
import { Home, About } from './screens/';
import { NavBar } from './components/';
import { getInformations } from './api/api';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    About,
  },
  data() {
    return {
      isCallingServe: false,
    };
  },
  methods: {
    ...mapActions(['addInformations']),
    getData() {
      this.isCallingServe = true;
      getInformations()
        .then((response) => {
          this.addInformations(response.data);
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          this.isCallingServe = false;
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
#app {
  scroll-behavior: smooth;
}
</style>
