<template>
  <div>
    <b-modal :visible="showModal" :title="title">
      <b-icon class="icon" variant="primary" :icon="iconName"></b-icon>
      <h5 class="my-4">{{ description }}</h5>
    </b-modal>
  </div>
</template>

<script>
import { BModal, BIcon } from 'bootstrap-vue';
export default {
  name: 'Modal',
  components: {
    BModal,
    BIcon,
  },
  props: {
    description: String,
    showModal: Boolean,
    title: String,
    iconName: String,
  },
};
</script>

<style scoped></style>
