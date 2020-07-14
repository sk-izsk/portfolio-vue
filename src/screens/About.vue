<template>
  <div>
    <Spinner :variant="'warning'" v-if="!(urlOne.length > 0 && urlTwo.length > 0 && skilsInformations.length > 0)" />
    <div v-if="(urlOne.length > 0 && urlTwo.length > 0  && skilsInformations.length > 0 )" class="about" id="about">
      <h1>About Me</h1>
      <div class="info-prog-bar-container">
        <div class="info-container-parent">
          <div class="info-container">
            <AboutMeCard
              :url="urlTwo"
              :description="' I am Shaikh Zeeshan Murshed, Full stack web developer from Montreal, Canada. I have experience in making Website.'"
              :openLink="openCv"
              :buttonText="'Download Resume'"
              :header="'Coding'"
            />
          </div>
          <div class="info-container">
            <AboutMeCard
              :url="urlOne"
              :description="'Apart from coding I love to take pictures. Potrayed, street photograpy, landscape and many more. I love to travel in different places as well'"
              :openLink="openInsta"
              :buttonText="'Explore More Images'"
              :header="'Hobbies'"
            />
          </div>
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
      urlTwo: '',
      urlOne: '',
      skilsInformations: [],
      variants: [
        'primary',
        'secondary',
        'info',
        'warning',
        'danger',
        'primary',
        'secondary',
        'info',
        'success',
        'danger',
        'warning',
        'danger',
      ],
    };
  },
  computed: {
    ...mapState(['informations']),
  },
  methods: {
    openCv() {
      window.open(
        'https://docs.google.com/document/d/16Ko4S8n50fedwi4re2K-djKxe2zGrRRWKuXdtko7jow/edit?usp=sharing',
        '_blank',
      );
    },
    openInsta() {
      window.open('https://www.instagram.com/sk_izsk/', '_blank');
    },
  },
  beforeMount() {
    const { avatar, skillsInformation } = this.informations;
    if (avatar !== undefined && skillsInformation) {
      this.urlTwo = avatar.avatarTwo;
      this.urlOne = avatar.avatarOne;
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
  flex-direction: column;
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

.info-container-parent {
  display: flex;
  flex-direction: row;
}
@media screen and (max-width: 914px) {
  .info-prog-bar-container {
    display: flex;
    flex-direction: column;
  }
  .info-container-parent {
    display: flex;
    flex-direction: column;
  }
}
</style>
