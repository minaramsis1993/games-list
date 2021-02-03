// import axios from 'axios';
import api from '../../api/games';

const state = {
  games: [],
  featuredGame: null,
  recommendedGames: null,
  popularGames: null,
  genres: [],
  selectedGame: null,
  // FOR UI
  selectedGenre: null,
  searchQuery: '',
};

const getters = {
  getGames: (state) => state.games,
  getFeaturedGame: (state) => {
    return state.featuredGame;
  },
  getRecommendedGames: (state) => state.recommendedGames,
  getPopularGames: (state) => state.popularGames,
  getGenres: (state) => state.genres,
  getSelectedGame: (state) => state.selectedGame,
  getSelectedGenre: (state) => state.selectedGenre,
};

const actions = {
  fetchGames: async ({ commit, state }) => {
    const qParams = {
      search: state.searchQuery.length ? state.searchQuery : undefined,
      genres: state.selectedGenre ? state.selectedGenre.slug : undefined,
    };
    const res = await api.fetchGames(qParams);
    const data = res.data.results;
    commit('setGames', data);
    // JUST MOCKING Featured, Recommended & Popular Games
    commit('setFeaturedGame', data.length ? data[0] : null);
    commit('setRecommendedGames', data.length > 1 ? data.slice(1, 6) : null);
    commit('setPopularGames', data.length > 6 ? data.slice(6) : null);
  },
  fetchGenres: async ({ commit }, pageSize) => {
    const res = await api.fetchGenres(pageSize);
    commit('setGenres', res.data.results);
  },
  selectGame: ({ commit }, game) => commit('setSelectedGame', game),
  selectGenre: ({ commit }, genre) => commit('setSelectedGenre', genre),
};

const mutations = {
  setGames: (state, games) => (state.games = games),
  setFeaturedGame: (state, featured) => (state.featuredGame = featured),
  setRecommendedGames: (state, recommendedGames) =>
    (state.recommendedGames = recommendedGames),
  setPopularGames: (state, popularGames) => (state.popularGames = popularGames),
  setGenres: (state, genres) => (state.genres = genres),
  setSelectedGame: (state, game) => (state.selectedGame = game),
  setSelectedGenre: (state, genre) => (state.selectedGenre = genre),
  // JUST MUTAION
  setSearchQuery: (state, searchQuery) => {
    state.searchQuery = searchQuery;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
