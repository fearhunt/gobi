<template>
  <footer id="footer" class="bg-primary">
    <b-container>
      <b-row>
        <b-col sm="12" md="2" class="my-auto">
          <h2 class="brand-title">Gobi</h2>
        </b-col>
        <b-col sm="12" md="10">
          <b-row>
            <b-col sm="12" md="3" class="text-md-center">
              <h4 class="nav-title">About</h4>
              <ul class="footer-nav">
                <b-nav-item v-for="(link, index) in about" :key="index" :to="link.url">
                  {{ link.title }}
                </b-nav-item>
              </ul>
            </b-col>
            <b-col sm="12" md="3" class="text-md-center">
              <h4 class="nav-title">Support</h4>
              <ul class="footer-nav">
                <b-nav-item v-for="(link, index) in support" :key="index" :href="link.url">
                  {{ link.title }}
                </b-nav-item>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        about: [
          { title: "Blog", url: "/?page=here" },
          { title: "Contact Us", url: "/?page=here" },
        ],
        support: [
          { title: "Help", url: "/?page=here" },
          { title: "Privacy Policy", url: "/?page=here" },
          { title: "Terms & Conditions", url: "/?page=here" },
        ]
      }
    },

    methods: {

    }
  }
</script>

<style lang="scss" scoped>

</style>