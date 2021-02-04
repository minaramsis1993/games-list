<template>
  <div class="games-list">
    <GenresSlider />
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col">
          <div class="loader-wrapper" v-if="getLoadingState">
            <PulseLoader :loading="true" :color="color" />
          </div>
          <div v-else>
            <FeaturedGame
              :featuredGame="getFeaturedGame"
              @new-game-selected="gameSelectedHandler"
            />
            <GamesCard
              :games="getRecommendedGames"
              @new-game-selected="gameSelectedHandler"
            />
            <GamesCard
              :games="getPopularGames"
              @new-game-selected="gameSelectedHandler"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from '../main';
import { mapActions, mapGetters } from 'vuex';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import GenresSlider from '../components/GenresSlider';
import FeaturedGame from '../components/FeaturedGame';
import GamesCard from '../components/GamesCard';

export default {
  components: {
    PulseLoader,
    GenresSlider,
    FeaturedGame,
    GamesCard,
  },
  computed: {
    ...mapGetters([
      'getFeaturedGame',
      'getRecommendedGames',
      'getPopularGames',
      'getLoadingState',
    ]),
  },
  methods: {
    ...mapActions(['selectGame', 'fetchGames']),
    gameSelectedHandler(game) {
      this.selectGame(game);
      router.push('/details');
    },
  },
  created() {
    this.fetchGames();
  },
  data() {
    return {
      color: '#5bc0de',
    };
  },
};
</script>

<style scoped>
.loader-wrapper {
  width: 100%;
  height: 56vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
