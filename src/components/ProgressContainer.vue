<template lang="">
  <div class="main-container">
    <div :key="skilInformation.name" class="main-progress-container" v-for="skilInformation in skilsInformations">
      <h5>{{ skilInformation.name }}</h5>
      <b-progress
        :value="skilInformation.progress"
        :max="100"
        class="mb-3"
        :variant="skilInformation.variant"
        show-progress
        animated
      ></b-progress>
    </div>
  </div>
</template>

<script>
import { BProgress } from 'bootstrap-vue';
export default {
  name: 'ProgressContainer',
  components: {
    BProgress,
  },
  props: {
    skilsInformations: Array,
  },
};
</script>

<style scoped>
.main-progress-container {
  flex: 1;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
