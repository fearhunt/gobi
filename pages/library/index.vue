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
            <div id="filter-library">
              <p @click="filterBooks($event, category)" v-for="(category, index) in categories" :key="index" class="library-tabs d-inline-block m-2">
                {{ category.name | capitalizeFirstLetterOfEachWord() }}
              </p>
            </div>
          </b-col>
          <b-col v-for="(book, index) in books" :key="index" sm="6" md="4" lg="3" class="mt-3">
            test
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
</style>