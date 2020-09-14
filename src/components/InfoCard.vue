<template>
  <div>
    <div :key="information.nameOfOrganization" class="info-card" v-for="information in informations">
      <b-icon class="icon" :icon="iconName" variant="primary"></b-icon>
      <b-card class="card-container" :title="information.nameOfOrganization" :sub-title="information.startYear">
        <b-card-text>
          {{ information.details }}
        </b-card-text>
        <b-button v-if="information.link" pill class="btn" @click="openLink(information.link)" href="#">Open</b-button>
        <b-button
          v-if="information.demoLink"
          pill
          class="btn demo-link"
          @click="openLink(information.demoLink)"
          href="#"
          >Demo</b-button
        >
      </b-card>
    </div>
  </div>
</template>

<script>
import { BCard, BCardText, BIcon, BButton } from 'bootstrap-vue';
export default {
  name: 'InfoCard',
  components: {
    BCard,
    BCardText,
    BIcon,
    BButton,
  },
  props: {
    informations: Array,
    iconName: String,
  },
  methods: {
    openLink(link) {
      window.open(link, '_blank');
    },
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
  justify-content: space-between;
}

.btn {
  background: linear-gradient(to right, #56ccf2, #2f80ed);
  border-style: none;
  transition: transform 0.5s ease;
}

.btn:hover {
  transform: scale(1.1);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
}

.demo-link {
  margin-left: 8px;
}
</style>
