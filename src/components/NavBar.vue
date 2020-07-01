<template>
  <div class="navbar-container">
    <b-navbar :sticky="true" toggleable="lg" type="dark" variant="dark">
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
          <b-nav-item v-scroll-to="{ el: '#photography' }">Photography</b-nav-item>
          <b-nav-item v-scroll-to="{ el: '#contact' }">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar-container {
  position: sticky;
  top: 0px;
  z-index: 120;
}
</style>
