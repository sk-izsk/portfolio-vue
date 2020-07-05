<template>
  <div>
    <div :key="information.nameOfOrganization" class="info-card" v-for="information in informations">
      <b-icon class="icon" :icon="iconName" variant="primary"></b-icon>
      <b-card class="card-container" :title="information.nameOfOrganization" :sub-title="(information.startYear)">
        <b-card-text>
          {{ information.details }}
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import { BCard, BCardText, BIcon } from 'bootstrap-vue';
export default {
  name: 'InfoCard',
  components: {
    BCard,
    BCardText,
    BIcon,
  },
  props: {
    informations: Array,
    iconName: String,
  },
};
</script>

<style scoped>
.info-card {
  padding: 0px 20px;
}
.icon {
  color: white;
  width: 30px;
  height: 30px;
  /* margin-top: 30px; */
  position: relative;
  top: 54px;
  z-index: 1;
  left: 7px;
}
.icon:hover {
  color: #ffd15c;
}

.card-container {
  display: flex;
  flex-direction: row;
  padding-left: 20px;
}
</style>
