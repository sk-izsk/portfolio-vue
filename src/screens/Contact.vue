<template>
  <div id="contact">
    <h1>Contact</h1>
    <FormContainer v-on:sendingEmail="updateStatus($event)" />
  </div>
</template>

<script>
import { FormContainer } from '../components';
export default {
  name: 'Contact',
  data() {
    return {
      isEmailSending: false,
    };
  },
  components: {
    FormContainer,
  },
  methods: {
    updateStatus(event) {
      this.$emit('sendingEmailFromContact', event);
    },
  },
};
</script>

<style scoped>
#contact {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
h1 {
  text-align: center;
  margin: 20px 0px;
}
</style>
