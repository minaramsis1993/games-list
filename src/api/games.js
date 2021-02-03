import axios from 'axios';
import qs from 'qs';
const ROOT_URL = 'https://api.rawg.io/api';
const API_KEY = 'd8defd45823d47a69c3f9fded5035aea';

const GAMES_ENDPOINT = `${ROOT_URL}/games`;
const GENRES_ENDPOINT = `${ROOT_URL}/genres`;

const mandatoryQParams = {
  key: API_KEY,
};
export default {
  fetchGames(qParamsObj) {
    // qParamsObj .. includes (search AND genres) PARAMS
    // https://api.rawg.io/api/games?key=d8defd45823d47a69c3f9fded5035aea&page_size=3&search=chess&genres=strategy
    const queryParams = {
      ...mandatoryQParams,
      page_size: 11,
      ...qParamsObj,
    };
    return axios.get(`${GAMES_ENDPOINT}?${qs.stringify(queryParams)}`);
  },
  fetchGenres(page_size = 20) {
    // https://api.rawg.io/api/genres?key=d8defd45823d47a69c3f9fded5035aea&page_size=20
    const queryParams = {
      ...mandatoryQParams,
      page_size,
    };
    return axios.get(`${GENRES_ENDPOINT}?${qs.stringify(queryParams)}`);
  },
};
