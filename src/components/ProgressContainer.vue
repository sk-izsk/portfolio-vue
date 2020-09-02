<template lang="">
  <div class="main-container"> <b-card no-body :key="technology" :header="technology" v-for="technology in
  technologies"> <b-list-group flush> <b-list-group-item :key="tech.name" v-for="tech in
  getSpecificTechnology(technology)"> <h5>{{ tech.name }}</h5> <b-progress :value="tech.progress" :max="100"
  class="mb-3" :variant="tech.variant" show-progress animated /></b-list-group-item> </b-list-group> </b-card> </div>
</template>

<script>
import { BProgress, BCard, BListGroup, BListGroupItem } from 'bootstrap-vue';
export default {
  name: 'ProgressContainer',
  components: {
    BProgress,
    BCard,
    BListGroup,
    BListGroupItem,
  },
  data() {
    return {
      technologies: ['FRONTEND', 'BACKEND', 'MISC'],
    };
  },
  props: {
    skilsInformations: Array,
  },
  methods: {
    getSpecificTechnology(technology) {
      return this.skilsInformations.filter((skillInformation) => skillInformation.technology === technology);
    },
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
  flex-direction: row;
}

.card {
  flex: 1;
  margin: 10px;
}

@media screen and (max-width: 914px) {
  .main-container {
    display: flex;
    flex-direction: column;
  }

  .card {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
