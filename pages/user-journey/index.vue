<template>
  <main>
    <section>
      <b-container>
        <b-row>
          <b-col cols="12">
            <h2 class="text-primary font-weight-bold">Catatan Perjalanan</h2>
            <p>Berikut ini catatan dari perjalanan penuh tantanganmu. Hebat kamu sudah sejauh ini!</p>
          </b-col>
          <template v-for="(challenge, index) in challenges">
            <b-col v-if="challenge.status == 1" :key="index" cols="12" md="6" lg="4" class="mt-3 mb-1 challenge-container">
              <b-card no-body :bg-variant="changeChallengeBackground(index + 1)">
                <b-row no-gutters>
                  <b-col cols="6" class="my-auto">
                    <b-card-body class="text-white text-right">
                      <i class="fa fa-check challenge-completed" aria-hidden="true"></i>
                      <h5 class="font-weight-bold">
                        Day {{ index + 1 }}
                      </h5>
                      <h6 class="pl-4 mb-0">
                        {{ challenge.name }}
                      </h6>
                    </b-card-body>
                  </b-col>
                  <b-col cols="6" class="img-display-card" :style="{ backgroundImage: `url(${challenge.image})` }"></b-col>
                </b-row>
              </b-card>
            </b-col>
          </template>
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