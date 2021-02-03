<template>
  <div class="games-list">
    <GenresSlider />
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col">
          <FeaturedGame :featuredGame="getFeaturedGame" />
          <GamesCard :games="getRecommendedGames" />
          <GamesCard :games="getPopularGames" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { router } from './main';
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
    // onClickNav() {
    //   this.selectGame({
    //     id: 1,
    //     name: 'game1',
    //   });
    //   router.push({
    //     path: 'details',
    //   });
    // },
  },
  created() {
    this.fetchGames();
  },
};
</script>

<style scoped></style>
