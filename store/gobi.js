export const state = () => ({
  recorderCounter: 0
});

export const mutations = {
  INCREMENT_RECORDER_COUNTER(state) {
    state.recorderCounter++;
  }
}

export const actions = { 
  async sendAudioRecord({ dispatch, commit }, payload) {
    const qs = require("querystring");
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    const responsedata = {
      pesan: payload.pesan,
      counter: payload.counter
    }

    await this.$axios.post("/audioresponse/", qs.stringify(responsedata), config)
      .then((res) => {
        console.log(res.data)
        commit("INCREMENT_RECORDER_COUNTER")
      });
  }
}