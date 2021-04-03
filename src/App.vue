<template>
  <div>
    <Spinner v-if="isCallingServe" :variant="'warning'" />
    <div v-if="!isCallingServe" id="app">
      <Home />
      <NavBar />
      <About />
      <Education />
      <Experience />
      <MyOffer />
      <Photography />
      <b-overlay :show="isEmailSending" rounded="lg" spinner-variant="warning" spinner-type="grow">
        <Contact v-on:sendingEmailFromContact="updateSendingEmailStatus($event)" />
      </b-overlay>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { getInformations } from './api/api';
import { NavBar, Spinner } from './components/';
import { About, Contact, Education, Experience, Home, MyOffer, Photography } from './screens/';

export default {
  name: 'App',
  components: {
    Spinner,
    NavBar,
    Home,
    About,
    Education,
    Experience,
    MyOffer,
    Photography,
    Contact,
  },
  data() {
    return {
      isCallingServe: false,
      isEmailSending: false,
    };
  },
  created() {
    this.$on('sendingEmail', (value) => {
      console.log('this is even', value);
    });
  },
  methods: {
    ...mapActions(['addInformations']),
    getData() {
      this.isCallingServe = true;
      getInformations()
        .then((response) => {
          this.addInformations(response.data[0]);
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          this.isCallingServe = false;
        });
    },
    updateSendingEmailStatus(event) {
      this.isEmailSending = event;
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
  font-family: 'JetBrains Mono';
}
</style>
