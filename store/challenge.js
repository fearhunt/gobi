export const state = () => ({
  challenges: [],
  challengeDetail: null,
});

export const mutations = {
  SET_CHALLENGES(state, payload) {
    state.challenges = payload;
  },

  SET_CHALLENGE_DETAIL(state, payload) {
    state.challengeDetail = payload;
  }
}

export const actions = { 
  async getAllChallenges({ dispatch, commit }) {
    await this.$axios.get("/api/challenges/")
      .then((res) => {
        commit("SET_CHALLENGES", res.data);
      }).catch((err) => {
        dispatch("alert/displayError", { ...err, message: "Terdapat error saat mengambil data tantangan. Mohon coba beberapa saat lagi" }, { root: true });
      });
  },

  async getChallengeDetailById({ dispatch, commit }, payload) {
    await this.$axios.get(`/api/challenges/${payload.id}`)
      .then((res) => {
        if (res.data.detail == "Not found.") {
          dispatch("alert/displayError", { ...res.data, message: "Data buku tidak ditemukan." }, { root: true });
          this.$router.push("/challenge");
        } else {
          commit("SET_CHALLENGE_DETAIL", res.data);
        }
      }).catch((err) => {
        dispatch("alert/displayError", { ...err, message: "Terdapat error saat mengambil data detail tantangan. Mohon coba beberapa saat lagi" }, { root: true });
        this.$router.push("/challenge");
      });
  }
}