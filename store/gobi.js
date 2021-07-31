export const state = () => ({
  recorderCounter: 0,
  gobiResponse: "Halo, namaku Gobi"
});

export const mutations = {
  INCREMENT_RECORDER_COUNTER(state) {
    state.recorderCounter++;
  },

  SET_GOBI_RESPONSE(state, payload) {
    state.gobiResponse = payload;
  }
}

export const actions = { 
  async sendAudioRecord({ dispatch, commit, state }, payload) {
    const qs = require("querystring");
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    const responsedata = {
      pesan: payload.pesan,
      counter: state.recorderCounter
    }

    await this.$axios.post("/audioresponse/", qs.stringify(responsedata), config)
      .then((res) => {
        commit("INCREMENT_RECORDER_COUNTER");
        commit("SET_GOBI_RESPONSE", res.data);
      });
  }
}