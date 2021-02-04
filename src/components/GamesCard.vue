<template>
  <div class="recommended" v-if="games">
    <div class="card mb-5 shadow-sm">
      <div class="row grid-container">
        <div
          class="grid-item"
          v-for="game in games"
          :key="game.id"
          @click="$emit('new-game-selected', game)"
        >
          <div>
            <img
              class="card-img-top"
              alt="Card image cap"
              :src="game.background_image"
            />
            <p class="game-name">
              {{ game.name }}
            </p>
          </div>
          <p class="info text-muted" v-if="withMoreInfo">
            <span
              v-for="(platform, index) in game.parent_platforms"
              :key="platform.id"
              >{{ platform.platform.name }}
              {{ index !== game.parent_platforms.length - 1 ? ',' : '' }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GamesCard',
  props: {
    games: Array,
    withMoreInfo: Boolean,
  },
};
</script>

<style scoped>
.grid-item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.grid-item img {
  border-radius: 0.7rem;
}
p.game-name {
  padding: 0;
  margin: 0;
}
.card {
  padding-top: 3.6rem;
  padding-bottom: 6rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
}

.info {
  text-align: center;
  margin-top: 2.5rem;
}

/* TABLET */
@media (max-width: 1000px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
/* MOBILE */
@media (max-width: 650px) {
  .grid-container {
    display: block;
  }
}
</style>
