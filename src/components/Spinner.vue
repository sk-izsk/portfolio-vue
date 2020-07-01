<template>
  <div class="d-flex justify-content-center mb-3 align-items-center spinner">
    <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" :variant="variant" type="grow"></b-spinner>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    variant: String,
  },
};
</script>

<style scoped>
.spinner {
  height: 100vh;
}
</style>
