<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="url" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Zeeshan">
            <b-card-text>
              I am Shaikh Zeeshan Murshed, Front-End developer from Montreal, Canada. I have experience in making
              Website. Also I am a hobbyist photographer.
            </b-card-text>
            <b-button pill class="btn" @click="openCv" href="#">Download Resume</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'AboutMeCard',
  props: {
    url: String,
  },
  methods: {
    openCv() {
      window.open(
        'https://docs.google.com/document/d/16Ko4S8n50fedwi4re2K-djKxe2zGrRRWKuXdtko7jow/edit?usp=sharing',
        '_blank',
      );
    },
  },
};
</script>

<style scoped>
.card-img {
  height: 100%;
}
.btn {
  background: linear-gradient(to right, #56ccf2, #2f80ed);
  border-style: none;
  transition: transform 0.5s ease;
}

.btn:hover {
  transform: scale(1.1);
}
</style>
