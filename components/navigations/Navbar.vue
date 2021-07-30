<template>
  <b-navbar toggleable="lg" type="light" :class="isHomepage">
    <b-navbar-brand to="/">
      <h2 class="navbar-brand-title mb-0">Gobi</h2>
    </b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse">
      <template #default="{ expanded }">
        <i class="fa" :class="expanded ? 'fa-chevron-up' : 'fa-chevron-down'" aria-hidden="true"></i>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto d-flex align-items-center p-2">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/?page=about">About</b-nav-item>
        <b-nav-item to="/?page=help">Help</b-nav-item>
        <template>
          <b-nav-item v-if="isDashboard" to="/dashboard" class="btn btn-round btn-secondary d-flex align-items-center justify-content-center mx-3">
            <i class="fa fa-user" aria-hidden="true"></i>
          </b-nav-item>
          <b-nav-item v-else to="/dashboard" class="btn btn-md btn-secondary mx-2 mr-md-0">Login</b-nav-item>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    computed: {
      isDashboard() {
        if ((this.$route.path).includes("dashboard")) {
          return true;
        }
      },

      isHomepage() {
        if (this.$route.path == "/") {
          return "transparent";
        }
      }
    },

    mounted() {
      const navItem = document.querySelectorAll(".navbar-nav .nav-item");
      const authBtn = navItem[navItem.length - 1];
        console.log(authBtn.querySelector("a"))  
      authBtn.querySelector("a").classList.remove("nav-link");
    }
  }
</script>

<style lang="scss" scoped>

</style>