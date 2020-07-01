<template>
  <div>
    <Spinner :variant="'warning'" v-if="!(url.length > 0 && skilsInformations.length > 0)" />
    <div v-if="(url.length > 0 && skilsInformations.length > 0 )" class="about" id="about">
      <h1>About Me</h1>
      <div class="info-prog-bar-container">
        <div class="info-container">
          <AboutMeCard :url="url" />
        </div>
        <div class="progress-bar-container">
          <ProgressContainer :skilsInformations="skilsInformations" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { AboutMeCard, ProgressContainer, Spinner } from '../components/';
export default {
  name: 'About',
  components: {
    AboutMeCard,
    ProgressContainer,
    Spinner,
  },
  data() {
    return {
      url: '',
      skilsInformations: [],
      variants: ['primary', 'secondary', 'info', 'success', 'danger'],
    };
  },
  computed: {
    ...mapState(['informations']),
  },
  beforeMount() {
    const { avatar, skillsInformation } = this.informations;
    if (avatar !== undefined && skillsInformation) {
      this.url = avatar.avatarTwo;
      this.skilsInformations = skillsInformation.map((skillInformation, index) => {
        return { ...skillInformation, variant: this.variants[index] };
      });
    }
  },
};
</script>

<style scoped>
.about {
  text-align: center;
  margin-top: 10px;
}
.info-prog-bar-container {
  display: flex;
}
.info-container {
  display: flex;
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
}
.progress-bar-container {
  display: flex;
  flex: 1;
  padding: 20px;
}
@media screen and (max-width: 914px) {
  .info-prog-bar-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
