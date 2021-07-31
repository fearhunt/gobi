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
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>
</template>

<script>
  export default {
    layout: "content",

    methods: {
      onSubmit() {
        console.log(this.form.search);
      }
    },

    data() {
      return {
        form: {
          search: ""
        }
      }
    },

    async mounted() {
      await this.$store.dispatch("library/getAllCategories");
      await this.$store.dispatch("library/getAllBooks");
    }
  }
</script>

<style lang="scss" scoped>
  
</style>