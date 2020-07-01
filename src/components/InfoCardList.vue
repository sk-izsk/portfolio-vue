<template>
  <div>
    <h1>{{ title }}</h1>
    <InfoCard :iconName="iconName" :informations="informations" />
  </div>
</template>

<script>
import InfoCard from './InfoCard';
export default {
  name: 'InfoCardList',
  components: {
    InfoCard,
  },
  props: {
    title: String,
    informations: Array,
    iconName: String,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
