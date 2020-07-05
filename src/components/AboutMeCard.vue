<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="url" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="header">
            <b-card-text>
              {{ description }}
            </b-card-text>
            <b-button pill class="btn" @click="openLink" href="#">{{ buttonText }}</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { BCard, BRow, BCol, BCardBody, BButton, BCardText, BCardImg } from 'bootstrap-vue';
export default {
  name: 'AboutMeCard',
  components: {
    BCard,
    BRow,
    BCol,
    BCardBody,
    BButton,
    BCardText,
    BCardImg,
  },
  props: {
    url: String,
    description: String,
    openLink: Function,
    buttonText: String,
    header: String,
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
  background: linear-gradient(to right, #2f80ed, #56ccf2);
}
</style>
