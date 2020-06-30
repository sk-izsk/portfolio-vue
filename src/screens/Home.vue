<template>
  <div class="home">
    <div class="primary-text">Zeeshan</div>
    <div class="secondary-text">Full stack web developer</div>
    <div class="social-icons">
      <div
        :key="socialIcon.icon"
        v-for="socialIcon in socialIcons"
        @click="openUrl(socialIcon.url)"
      >
        <v-icon :name="socialIcon.icon" />
      </div>
    </div>
    <b-icon class="icon" icon="arrow-down-circle" animation="throb"></b-icon>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      socialIcons: [
        { icon: "github", url: "https://github.com/sk-izsk" },
        { icon: "linkedin", url: "https://www.linkedin.com/in/skizsk/" },
        { icon: "twitter", url: "https://twitter.com/Sk_iZsk" },
        { icon: "facebook", url: "https://www.facebook.com/Sk.iZsk" },
        { icon: "instagram", url: "https://www.instagram.com/sk_izsk/" },
        { icon: "send", url: "https://t.me/sk_izsk'" },
        { icon: "at-sign", url: "mailto:sk.zeeshan1992@gmail.com" },
      ],
    };
  },
  methods: {
    openUrl(url) {
      return window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  background-size: cover;
  background: linear-gradient(transparent, #000),
    url("https://lh3.googleusercontent.com/pw/ACtC-3cye7uJhsfmf6gwLDESdUlWKLPtHJ1j-Czs4-HdZhGwnIIsNOTRJNn_C1xNl1DAR75FuupySIiU85Tb-IqiKczJKG6TSSbopGVn-emMOcO3bXABnKr-PjFQJwUXKVwURSgo6d7KVhU4MPB89LIkgYQk0w=w1080-h810-no?authuser=0");
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
</style>
