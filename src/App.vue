<template>
  <div>
    <Spinner v-if="isCallingServe" :variant="'warning'" />
    <div v-if="!isCallingServe" id="app">
      <Home />
      <NavBar />
      <About />
      <Education />
      <Experience />
      <Photography />
    </div>
  </div>
</template>

<script>
import { Home, About, Education, Experience, Photography } from './screens/';
import { NavBar, Spinner } from './components/';
import { getInformations } from './api/api';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Spinner,
    NavBar,
    Home,
    About,
    Education,
    Experience,
    Photography,
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
