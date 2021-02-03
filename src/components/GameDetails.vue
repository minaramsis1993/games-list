<template>
  <div class="game-details" v-if="getSelectedGame">
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col">
          DETAILS NAME {{ getSelectedGame.name }}
          <div class="card mb-5 shadow-sm">
            <div class="row">
              <div class="col">
                <img
                  class="card-img-top card-img-bottom"
                  alt="Card image cap"
                  :src="getSelectedGame.background_image"
                />
              </div>
            </div>
          </div>
          <GamesCard
            :games="getRecommendedGames"
            :withMoreInfo="true"
            @new-game-selected="gameSelectedHandler"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from '../main';
import { mapGetters, mapActions } from 'vuex';
import GamesCard from './GamesCard';

export default {
  components: {
    GamesCard,
  },
  computed: {
    ...mapGetters(['getSelectedGame', 'getRecommendedGames']),
  },
  methods: {
    ...mapActions(['selectGame']),
    gameSelectedHandler(game) {
      this.selectGame(game);
    },
  },
  created() {
    if (!this.getSelectedGame) {
      router.push('/');
    }
  },
};
</script>

<style scoped>
.card-img-top {
  max-height: 50vh;
  object-fit: cover;
  object-position: top;
}
</style>
