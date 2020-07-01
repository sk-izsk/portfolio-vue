<template>
  <div>
    <b-modal :visible="showModal" :title="title">
      <b-icon class="icon" variant="primary" :icon="iconName"></b-icon>
      <h5 class="my-4">{{ description }}</h5>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    description: String,
    showModal: Boolean,
    title: String,
    iconName: String,
  },
};
</script>

<style scoped></style>
