<template>
  <div id="education">
    <Spinner variant="warning" v-if="educationInformations.length === 0" />
    <InfoCardList
      v-if="educationInformations.length > 0"
      :iconName="'book'"
      :title="'Education'"
      :informations="educationInformations"
    />
  </div>
</template>

<script>
import { InfoCardList, Spinner } from '../components';
import { mapState } from 'vuex';

export default {
  name: 'Education',
  components: {
    InfoCardList,
    Spinner,
  },
  data() {
    return {
      educationInformations: [],
    };
  },
  computed: {
    ...mapState(['informations']),
  },
  beforeMount() {
    const { educationInformations } = this.informations;
    if (educationInformations) {
      this.educationInformations = educationInformations;
    }
  },
};
</script>

<style scoped></style>
