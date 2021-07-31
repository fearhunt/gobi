<template>
  <b-navbar :variant="isChallengePage ? 'transparent' : 'primary'" class="justify-content-between">
    <b-button :to="navLink" variant="round">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </b-button>
    <h5 class="text-white font-weight-bold mb-0">
      {{ pageTitle }}
    </h5>
    <b-button to="/" disabled aria-hidden="true" variant="round" style="opacity: 0" />
  </b-navbar>
</template>

<script>
  export default {
    computed: {
      isChallengePage() {
        if ((this.$route.path).includes("challenge")) {
          return true;
        } else {
          return false;
        }
      },

      pageTitle() {
        if (this.$route.path == "/library") {
          return "Perpustakaan";
        } else if ((this.$route.path).includes("library/book")) {
          return this.$store.state.library.bookDetail?.name;
        }
      },

      navLink() {
        if ((this.$route.path == "/library") || (this.$route.path == "/challenge")) {
          return "/";
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

    &.bg-transparent {
      .btn-round {
        background-color: $primary;
        color: white;
      }
    }
  }
</style>