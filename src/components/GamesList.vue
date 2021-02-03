<template>
  <div class="games-list">
    <GenresSlider />
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col">
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
</template>

<script>
import { router } from '../main';
import { mapActions, mapGetters } from 'vuex';
import GenresSlider from './GenresSlider';
import FeaturedGame from './FeaturedGame';
import GamesCard from './GamesCard';

export default {
  components: {
    GenresSlider,
    FeaturedGame,
    GamesCard,
  },
  computed: {
    ...mapGetters([
      'getFeaturedGame',
      'getRecommendedGames',
      'getPopularGames',
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
};
</script>

<style scoped></style>
