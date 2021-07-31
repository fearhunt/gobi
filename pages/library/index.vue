<template>
  <main>
    <section class="bg-primary">
      <b-container>
        <b-row>
          <b-col cols="12">
            <p>Mau baca apa hari ini?</p>
            <b-form @submit.prevent="onSubmit">
              <b-input-group class="my-3">
                <b-form-input v-model="form.search" type="text" placeholder="Cari judul buku, pengarang, . . ."></b-form-input>
                <template #append>
                  <b-input-group-text @click="onSubmit">
                    <i class="fa fa-search"></i>
                  </b-input-group-text>
                </template>
              </b-input-group>
            </b-form>
            <div id="filter-library" class="text-center">
              <p @click="filterBooks($event, category)" v-for="(category, index) in categories" :key="index" class="library-tabs d-inline-block m-2">
                {{ category.name | capitalizeFirstLetterOfEachWord() }}
              </p>
            </div>
          </b-col>
          <b-col v-for="(book, index) in books" :key="index" cols="6" md="4" lg="3" class="mt-3 mb-1 book-container">
            <nuxt-link :to="`/library/book/${book.id}`">
              <div class="book">
                <div class="book-poster-container text-center mb-2" :class="changeBookPosterBackground(index + 1)">
                  <b-img :src="book.thumbnail" fluid rounded class="book-poster"></b-img>
                </div>
                <p class="text-center text-white font-weight-bold mb-1">
                  {{ book.name }}
                </p>
                <p class="text-center text-white book-desc">
                  <!-- {{ book.desc }} -->
                  telah dibaca 1{{ index }}{{ index }} anak
                </p>
              </div>
            </nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    layout: "content",

    head() {
      return {
        bodyAttrs: {
          class: "bg-primary"
        }
      }
    },

    computed: {
      ...mapState({
        categories: state => state.library.categories,
        books: state => state.library.books
      })
    },

    data() {
      return {
        form: {
          search: ""
        }
      }
    },

    methods: {
      onSubmit() {
        console.log(this.form.search);
      },

      filterBooks(event, category) {
        const tabs = document.querySelectorAll(".library-tabs");
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });

        event.target.classList.add("active");
      },

      changeBookPosterBackground(index) {
        if (index % 4 == 0) {
          return "bg-tosca";
        } else if (index % 3 == 0) {
          return "bg-pink";
        } else if (index % 2 == 0) {
          return "bg-secondary";
        } else if (index % 1 == 0) {
          return "bg-yellow";
        }
      }
    },

    async mounted() {
      await this.$store.dispatch("library/getAllCategories");
      await this.$store.dispatch("library/getAllBooks");
      document.querySelector(".library-tabs").classList.add("active");
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/base/_colours.scss";
  @import "~/assets/scss/base/_variables.scss";

  .library-tabs {
    cursor: pointer;
    transition: $gobi-transition;

    &:first-child {
      margin-left: 0 !important;
    }

    &.active {
      font-weight: bold;
      border-bottom: $gobi-border $secondary;
      margin-bottom: -0.25rem;
    }
  }

  .book {
    .book-desc {
      font-size: 0.75rem;
    }

    .book-poster-container {
      background: white;
      border-radius: $gobi-border-radius;
      height: 8rem;
      margin-top: 10rem;

      .book-poster {
        margin-top: -10rem;
      }

      @media (max-width: 768px) {
        margin-top: 5rem;

        .img-fluid {
          margin-top: -5rem;
        }
      }
    }
  }
</style>