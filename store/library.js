export const state = () => ({
  books: [],
  categories: []
});

export const mutations = {
  SET_BOOKS(state, payload) {
    state.books = payload;
  },

  SET_CATEGORIES(state, payload) {
    state.categories = payload;
  }
}

export const actions = { 
  async getAllBooks({ dispatch, commit }) {
    await this.$axios.get("/api/book/")
      .then((res) => {
        commit("SET_BOOKS", res.data);
      }).catch((err) => {
        dispatch("alert/displayError", { ...err, message: "Terdapat error saat mengambil data perpustakaan. Mohon coba beberapa saat lagi" }, { root: true });
      });
  },

  async getAllCategories({ dispatch, commit }) {
     await this.$axios.get("api/book/category/")
      .then((res) => {
        commit("SET_CATEGORIES", res.data);
      }).catch((err) => {
        dispatch("alert/displayError", { ...err, message: "Terdapat error saat mengambil data kategori. Mohon coba beberapa saat lagi" }, { root: true });
      });
  }
}