<template>
  <div>
    <b-card no-body :header="title">
      <b-list-group flush>
        <b-list-group-item :key="offering" v-for="offering in offerings">
          <b-icon icon="check-all" animation="throb" font-scale="1.5" variant="primary"></b-icon>
          {{ offering }}</b-list-group-item
        >
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
import { BCard, BListGroup, BIcon, BListGroupItem } from 'bootstrap-vue';
export default {
  name: 'OfferingContainer',
  components: {
    BCard,
    BListGroup,
    BIcon,
    BListGroupItem,
  },
  props: {
    title: String,
    offerings: Array,
  },
};
</script>

<style scoped></style>
