<template>
  <div>
    <Spinner :variant="'warning'" v-if="photos.length === 0" />
    <div id="photography" v-if="photos.length > 0">
      <h1>Photography</h1>
      <b-container fluid class="p-4 bg-dark">
        <b-row class="image-container">
          <b-img
            @click="openUrl"
            v-for="photo in photos"
            :key="photo.url"
            class="m-2 photo"
            thumbnail
            fluid
            :src="photo.url"
            :alt="photo.url"
          ></b-img>
        </b-row>
        <div class="btn-container">
          <b-button pill class="btn ml-2" @click="openUrl" size="lg">More Images</b-button>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import { Spinner } from '../components/';
import { mapState } from 'vuex';
export default {
  name: 'Photography',
  components: {
    Spinner,
  },
  data() {
    return {
      photos: [],
    };
  },
  methods: {
    openUrl() {
      return window.open('https://www.instagram.com/sk_izsk/', '_blank');
    },
  },
  computed: {
    ...mapState(['informations']),
  },
  beforeMount() {
    const { photos } = this.informations;
    if (photos) {
      this.photos = photos;
    }
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 20px 0px;
}
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.photo {
  width: 250px;
  height: 200px;
  cursor: pointer;
  transition: transform 0.5s ease;
  filter: grayscale(100%);
}
.photo:hover {
  transform: scale(1.1);
  filter: grayscale(0);
}
.btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
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
</style>
