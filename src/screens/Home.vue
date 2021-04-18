<template>
  <div class="home" id="home">
    <particles-bg type="thick" :num="5" :bg="true" />
    <div class="primary-text">Zeeshan</div>
    <div class="secondary-text">Full stack web developer</div>
    <div class="social-icons p-1">
      <div :key="socialIcon.icon" v-for="socialIcon in socialIcons" @click="openUrl(socialIcon.url)">
        <v-icon :name="socialIcon.icon" />
      </div>
    </div>
    <b-icon v-scroll-to="{ el: '#about' }" class="icon" icon="arrow-down-circle" animation="throb"></b-icon>
    <div class="mt-3 flex text-center flex-column">
      <b-button pill class="btn m-2" @click="openUrl('https://izsk.vercel.app')" size="lg">NEXT portfolio</b-button>
      <b-button pill class="btn m-2" @click="openUrl('https://izsk.netlify.app')" size="lg">React Portfolio</b-button>
    </div>
  </div>
</template>

<script>
import { BButton, BIcon } from 'bootstrap-vue';
import { ParticlesBg } from 'particles-bg-vue';
export default {
  name: 'Home',
  components: {
    ParticlesBg,
    BButton,
    BIcon,
  },
  data() {
    return {
      socialIcons: [
        { icon: 'github', url: 'https://github.com/sk-izsk' },
        { icon: 'linkedin', url: 'https://www.linkedin.com/in/skizsk/' },
        { icon: 'twitter', url: 'https://twitter.com/Sk_iZsk' },
        { icon: 'facebook', url: 'https://www.facebook.com/Sk.iZsk' },
        { icon: 'instagram', url: 'https://www.instagram.com/sk_izsk/' },
        { icon: 'send', url: "https://t.me/sk_izsk'" },
        { icon: 'at-sign', url: 'mailto:sk.zeeshan1992@gmail.com' },
      ],
    };
  },
  methods: {
    openUrl(url) {
      return window.open(url, '_blank');
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: 50% 0px;
  height: 100vh;
  background-attachment: fixed;
  align-items: center;
  flex-direction: column;
}
.social-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 364px;
  width: 100%;
}
.primary-text {
  font-size: 5rem;
  color: white;
  text-align: center;
}
.secondary-text {
  color: #f4f4f4;
  font-size: 3rem;
  text-align: center;
}
.icon {
  color: white;
  width: 30px;
  height: 30px;
  margin-top: 30px;
}
.icon:hover {
  color: #ffd15c;
  cursor: pointer;
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
