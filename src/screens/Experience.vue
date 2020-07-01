<template>
  <div class="mt-3" id="experience">
    <Spinner variant="warning" v-if="experienceInformations.length === 0" />
    <InfoCardList
      v-if="experienceInformations.length > 0"
      :title="'Experience'"
      :informations="experienceInformations"
      :iconName="'bag-check'"
    />
  </div>
</template>

<script>
import { InfoCardList, Spinner } from '../components';
import { mapState } from 'vuex';

export default {
  name: 'Experience',
  components: {
    InfoCardList,
    Spinner,
  },
  data() {
    return {
      experienceInformations: [],
    };
  },
  computed: {
    ...mapState(['informations']),
  },
  beforeMount() {
    const { experienceInformations } = this.informations;
    if (experienceInformations) {
      this.experienceInformations = experienceInformations;
    }
  },
};
</script>

<style scoped></style>
