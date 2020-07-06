export const state = () => ({
  articles: []
})

export const actions = {
  // экшен возвращающий все записи
  async fetchItems({ commit }) {
    try {
      const articles = await this.$axios.$get('/api/article/getall')
      commit('SET_ARTICLES', articles.data)
    } catch (e) {
      console.error('e.response.data.message')
      throw e
    }
  }
}

export const mutations = {
  // заносим полученные данные в стор
  SET_ARTICLES(state, articles) {
    state.articles = articles
  }
}

export const getters = {
  // отдаем данные
  articles: (state) => state.articles
}
