export const state = () => ({
  books: [],
  bookDetail: null,
  categories: []
});

export const mutations = {
  SET_BOOKS(state, payload) {
    state.books = payload;
  },

  SET_BOOK_DETAIL(state, payload) {
    state.bookDetail = payload;
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

  async getBookDetailById({ dispatch, commit }, payload) {
    await this.$axios.get(`/api/book/${payload.id}`)
      .then((res) => {
        if (res.data.detail == "Not found.") {
          dispatch("alert/displayError", { ...res.data, message: "Data buku tidak ditemukan." }, { root: true });
          this.$router.push("/library");
        } else {
          commit("SET_BOOK_DETAIL", res.data);
        }
      }).catch((err) => {
        dispatch("alert/displayError", { ...err, message: "Terdapat error saat mengambil data detail buku. Mohon coba beberapa saat lagi" }, { root: true });
        this.$router.push("/library");
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