<template>
  <b-navbar type="light" class="justify-content-between">
    <b-button :to="navLink" variant="round" :class="challengePageClass">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </b-button>
    <h5 class="text-white font-weight-bold">
      {{ pageTitle }}
    </h5>
    <b-button to="/" disabled aria-hidden="true" style="opacity: 0" />
  </b-navbar>
</template>

<script>
  export default {
    computed: {
      challengePageClass() {
        if ((this.$route.path).includes("challenge")) {
          return "light";
        }
      },

      pageTitle() {
        if (this.$route.path == "/library") {
          return "Perpustakaan";
        }
      },

      navLink() {
        if ((this.$route.path == "/library") || (this.$route.path == "/challenge")) {
          return "/"
        } else {
          const routeHistory = this.$nuxt.context.from;

          if (routeHistory) {
            return routeHistory.fullPath;
          } else {
            return "/";
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/base/_colours.scss";

  .navbar {
    .btn-round {
      background-color: white;
      color: $primary;
      padding: 0;
      width: 1.5rem;
      height: 1.5rem;
      font-size: 0.8rem;

      &.light {
        background-color: $primary;
        color: white;
      }
    }
  }
</style>