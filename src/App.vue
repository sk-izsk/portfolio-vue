<template>
  <div v-if="!isCallingServe" id="app">
    <Home />
  </div>
</template>

<script>
import Home from './screens/Home';
import { getInformations } from './api/api';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Home,
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
          console.log('this is data', response.data);
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

<style></style>
