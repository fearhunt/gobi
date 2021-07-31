<template>
  <main>
    <template v-if="isFetched">
      <template v-if="bookDetail">
        
      </template>
    </template>
  </main>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    layout: "content",

    computed: {
      ...mapState({
        bookDetail: state => state.library.bookDetail
      })
    },

    data() {
      return {
        isFetched: false,
        bookId: this.$route.params.id
      }
    },

    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });

      this.$store.dispatch("library/getBookDetailById", { id: this.bookId })
        .then(() => {
          console.log(this.bookDetail);
        }).catch(() => {
            console.error("Fetching book detail error");
        }).finally(() => {
          this.isFetched = true;
          setTimeout(() => this.$nuxt.$loading.finish(), 500);
        });
    }
  }
</script>

<style lang="scss" scoped>

</style>