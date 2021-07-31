<template>
  <main>
    <section>
      <b-container>
        <b-row>
          <b-col cols="12" class="mt-3 mb-1 challenge-container">
            <b-card no-body bg-variant="primary">
              <b-row no-gutters>
                <b-col cols="6" class="my-auto">
                  <b-card-body class="text-white text-right">
                    <h5 class="font-weight-bold">
                      Day 1
                    </h5>
                    <h6 class="pl-4">
                      Bebaskan Imajinasi
                    </h6>
                  </b-card-body>
                </b-col>
                <b-col cols="6" class="img-display-card" :style="{ backgroundImage: 'url(' + require('@/assets/img/challenge1.png') + ')'}"></b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col cols="12" class="text-center">
            <p class="pt-4">Baca sebuah cerita dongeng dan ubah akhiran ceritanya sesuai imajinasimu!</p>
            <div class="challenge-area">
              <p class="pt-2 pb-3">Tunjukkan foto sebagai bukti dan kenangan</p>
              <b-img :src="require('~/assets/img/camera.png')" fluid class="" style="height:6rem"></b-img>
            </div>
          </b-col>
          <b-col cols="12" class="text-center">
            <b-button to="/" size="lg" class="bg-primary px-5" style="margin-top:-1rem; border:none !important">
              Simpan
            </b-button>
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
        challenges: state => state.challenge.challenges
      })
    },

    methods: {
      changeChallengeBackground(index) {
        if (index % 4 == 0) {
          return "pink";
        } else if (index % 3 == 0) {
          return "primary";
        } else if (index % 2 == 0) {
          return "soft-pink";
        } else if (index % 1 == 0) {
          return "tosca";
        }
      }
    },

    async mounted() {
      await this.$store.dispatch("challenge/getAllChallenges");
    }
  }
</script>

<style lang="scss" scoped>
  .challenge-completed {
    position: absolute;
    left: -0.8rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 4rem;
    color: #FFA600;
  }
</style>