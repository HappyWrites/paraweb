import { data } from "./data";

export const state = () => ({
  cards: [],
  filterOnAuthorIsActive: false,
  filterCardsWithDesiredAuthor: false,
  searchAuthor: '',
  searchDate: ['', '']
})

export const mutations = {
  setCards(state, data) {
    state.cards = data;
  },

  toggleFilterOnAuthor(state) {
    state.filterOnAuthorIsActive = !state.filterOnAuthorIsActive;
  },

  activateFilterCardsWithDesiredAuthor(state) {
    state.filterCardsWithDesiredAuthor = true;
  },

  lockFilterCardsWithDesiredAuthor(state) {
    state.filterCardsWithDesiredAuthor = false;
  },

  getSearchAuthor(state, author) {
    state.searchAuthor = author;
  },

  getSearchDate(state, date) {
    state.searchDate = date
  }
}


export const actions = {
  getCards({ commit }) {
    commit('setCards', data.articles)
  }
}


export const getters = {
  getAuthors(state) {
    let authors = []

    state.cards.forEach(item => {
      if (item.author) {
        authors.push(item.author)
      }
    })
    return authors = new Set(authors);
  },

  getCardsWithDesiredAuthor(state) {
    return state.cards.filter(item => item.author === state.searchAuthor)
  },

  getCardsWithDesiredDate(state) {
    const onlyFrom = state.searchDate[0].length > 0 && state.searchDate[1].length === 0;
    const onlyBefore = state.searchDate[0].length === 0 && state.searchDate[1].length > 0;
    const fromAndBefore = state.searchDate[0].length > 0 && state.searchDate[1].length > 0;

    function parseDMY(string) {
      let b = string.split(/\D+/);
      return new Date(b[2], b[1] - 1, b[0]);
    }

    function convertDigitIn(str) {
      return str.slice(0, 10).split('-').reverse().join('-')
    }

    if (onlyFrom) {
      return state.cards.filter(item => parseDMY(convertDigitIn(item.publishedAt)) > parseDMY(state.searchDate[0]))
    } else if (onlyBefore) {
      return state.cards.filter(item => parseDMY(convertDigitIn(item.publishedAt)) < parseDMY(state.searchDate[1]))
    } else if (fromAndBefore) {
      return state.cards.filter(item => parseDMY(convertDigitIn(item.publishedAt)) > parseDMY(state.searchDate[0]) && parseDMY(convertDigitIn(item.publishedAt)) < parseDMY(state.searchDate[1]))
    } else {
      return state.cards
    }
  }
}
