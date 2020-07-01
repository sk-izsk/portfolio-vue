<template>
  <div id="contact">
    <h1>Contact</h1>
    <FormContainer />
  </div>
</template>

<script>
import { FormContainer } from '../components';
export default {
  name: 'Contact',
  components: {
    FormContainer,
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
