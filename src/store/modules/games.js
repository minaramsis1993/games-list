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
  isGamesLoading: false,
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
  getLoadingState: (state) => state.isGamesLoading,
};

const actions = {
  fetchGames: async ({ commit, state }) => {
    const qParams = {
      search: state.searchQuery.length ? state.searchQuery : undefined,
      genres: state.selectedGenre ? state.selectedGenre.slug : undefined,
    };
    commit('setLoading', true);
    try {
      const res = await api.fetchGames(qParams);
      commit('setLoading', false);
      const data = res.data.results;
      commit('setGames', data);
      // JUST MOCKING Featured, Recommended & Popular Games
      commit('setFeaturedGame', data.length ? data[0] : null);
      commit('setRecommendedGames', data.length > 1 ? data.slice(1, 6) : null);
      commit('setPopularGames', data.length > 6 ? data.slice(6) : null);
    } catch (error) {
      console.log(error);
      commit('setLoading', false);
    }
  },

  fetchGenres: async ({ commit }, pageSize) => {
    try {
      const res = await api.fetchGenres(pageSize);
      commit('setGenres', res.data.results);
    } catch (error) {
      console.log(error);
    }
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
  setSearchQuery: (state, searchQuery) => (state.searchQuery = searchQuery),
  setLoading: (state, isGamesLoading) =>
    (state.isGamesLoading = isGamesLoading),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
