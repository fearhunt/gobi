<template>
  <b-navbar variant="primary">
    <b-navbar-brand to="/">
      <!-- <h2 class="navbar-brand-title mb-0">Gobi</h2> -->
      <b-row>
        <div class="text-center ml-3 mr-2">
          <b-img :src="require('~/assets/img/avatar.png')" fluid class="" style="height:5rem"></b-img>
          <h6 class="navbar-name">Danny</h6>
          <p class="navbar-level">Level 1</p>
        </div>
        <div class="text-center mt-3 ml-4">
          <b-row class="navbar-points align-items-center">
            <p class="" style="margin-bottom:0">288</p>
            <b-img :src="require('~/assets/img/point.png')" fluid class="" style="height:2.5rem; margin:-0.25rem -1rem -0.25rem 0.5rem;"></b-img>
          </b-row>
        </div>
      </b-row>
      
    </b-navbar-brand>
  </b-navbar>
</template>

<script>
  export default {
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>

</style>