<template>
  <main>
    <template v-if="isFetched">
      <section v-if="bookDetail">
        <b-container >
          <b-row>
            <b-col cols="12" class="text-center">
              <div v-if="isReadMode">
                <flipbook class="flipbook" :pages="cek"></flipbook>
              </div>
              <div v-else>
                <b-img :src="bookDetail.thumbnail" fluid rounded class="book-poster d-block mx-auto"></b-img>
                <b-button @click="isReadMode = !isReadMode" variant="secondary" class="my-4">Baca Sekarang!</b-button>
                <div class="bg-light rounded py-4 px-3">
                  <p class="text-description">
                    {{ bookDetail.desc }}
                  </p>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
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
        isReadMode: false,
        bookId: this.$route.params.id,
        cek: [
          "https://gobi-app.herokuapp.com/media/thumbnail/The_mystery_of_cyber_friend.jpg",
          "https://gobi-app.herokuapp.com/media/thumbnail/The_mystery_of_cyber_friend.jpg",
          "https://gobi-app.herokuapp.com/media/thumbnail/The_mystery_of_cyber_friend.jpg",
          "https://gobi-app.herokuapp.com/media/thumbnail/The_mystery_of_cyber_friend.jpg",
          "https://gobi-app.herokuapp.com/media/thumbnail/The_mystery_of_cyber_friend.jpg",
          "https://gobi-app.herokuapp.com/media/thumbnail/The_mystery_of_cyber_friend.jpg",
          "https://gobi-app.herokuapp.com/media/thumbnail/The_mystery_of_cyber_friend.jpg",
          "https://gobi-app.herokuapp.com/media/thumbnail/The_mystery_of_cyber_friend.jpg",
          "https://gobi-app.herokuapp.com/media/thumbnail/The_mystery_of_cyber_friend.jpg",
          "https://gobi-app.herokuapp.com/media/thumbnail/The_mystery_of_cyber_friend.jpg",
          "https://gobi-app.herokuapp.com/media/thumbnail/The_mystery_of_cyber_friend.jpg",
          "https://gobi-app.herokuapp.com/media/thumbnail/The_mystery_of_cyber_friend.jpg",
        ]
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
  .flipbook {
    width: 90vw;
    height: 90vh;
  }
</style>