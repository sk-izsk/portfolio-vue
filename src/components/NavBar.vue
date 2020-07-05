<template>
  <div class="navbar-container">
    <b-navbar toggleable="md" class="transparent" :sticky="true" type="dark">
      <b-navbar-brand href="/">iZsk</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-scroll-to="{ el: '#home' }">Home</b-nav-item>
          <b-nav-item v-scroll-to="{ el: '#about' }">
            About
          </b-nav-item>
          <b-nav-item v-scroll-to="{ el: '#education' }">Education</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-scroll-to="{ el: '#experience' }">Experience</b-nav-item>
          <b-nav-item v-scroll-to="{ el: '#myOffer' }">My Offer</b-nav-item>
          <b-nav-item v-scroll-to="{ el: '#photography' }">Photography</b-nav-item>
          <b-nav-item v-scroll-to="{ el: '#contact' }">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { BNavbar, BCollapse, BNavbarNav, BNavItem, BNavbarToggle, BNavbarBrand } from 'bootstrap-vue';
export default {
  name: 'NavBar',
  components: {
    BNavbar,
    BCollapse,
    BNavbarNav,
    BNavItem,
    BNavbarToggle,
    BNavbarBrand,
  },
};
</script>

<style scoped>
.navbar-container {
  position: sticky;
  top: 0px;
  z-index: 120;
}

.transparent {
  background: rgba(0, 0, 0, 0.7);
  color: black;
}
</style>
