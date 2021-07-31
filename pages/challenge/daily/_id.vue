<template>
  <main>
    <template v-if="isFetched">
      <section v-if="challengeDetail">
        <b-container>
          <b-row>
            <b-col cols="12" class="text-center">
              <b-card no-body :bg-variant="changeChallengeBackground(challengeDetail.id)">
                <b-row no-gutters>
                  <b-col cols="6" class="my-auto">
                    <b-card-body class="text-white text-right">
                      <h5 class="font-weight-bold">
                        Day {{ challengeIndex }}
                      </h5>
                      <h6 class="pl-4">
                        {{ challengeDetail.name }}
                      </h6>
                    </b-card-body>
                  </b-col>
                  <b-col cols="6" class="img-display-card" :style="{ backgroundImage: `url(${challengeDetail.image})` }"></b-col>
                </b-row>
              </b-card>
              <p class="my-3">
                {{ challengeDetail.desc }}
              </p>
              <b-form @submit.prevent="onSubmit">
                <b-card bg-variant="soft-purple">
                  <p class="mb-0 mb-3">Tunjukkan foto sebagai bukti kenangan</p>
                  <b-img :src="require('~/assets/img/camera.png')" fluid class="img-camera cursor-pointer"></b-img>
                </b-card>
                <b-button type="submit" variant="primary" class="my-3">Simpan</b-button>
              </b-form>
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
        challenges: state => state.challenge.challenges,
        challengeDetail: state => state.challenge.challengeDetail
      })
    },

    data() {
      return {
        isFetched: false,
        challengeIndex: 0,
        challengeId: this.$route.params.id,
        form: {
          photo: null
        }
      }
    },

    methods: {
      changeChallengeBackground(challengeId) {
        this.challenges.forEach((challenge, index) => {
          if (challenge.id == challengeId) {
            this.challengeIndex = index + 1;
            return;
          }
        });
        
        if (this.challengeIndex >= 4) {
          return "disabled";
        } else if (this.challengeIndex % 3 == 0) {
          return "primary";
        } else if (this.challengeIndex % 2 == 0) {
          return "soft-pink";
        } else if (this.challengeIndex % 1 == 0) {
          return "tosca";
        }
      },

      onSubmit() {
        console.log(this.form.photo)
      }
    },

    async mounted() {
      await this.$store.dispatch("challenge/getAllChallenges");
      await this.$store.dispatch("challenge/getChallengeDetailById", { id: this.challengeId })
        .then(() => {
            console.log(this.challengeDetail);
          }).catch(() => {
              console.error("Fetching challenge detail error");
          }).finally(() => {
            this.isFetched = true;
            setTimeout(() => this.$nuxt.$loading.finish(), 500);
          });
    }
  }
</script>

<style lang="scss" scoped>
  .img-camera {
    width: 6rem;
  }
</style>