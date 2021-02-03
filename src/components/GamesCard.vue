<template>
  <div class="recommended" v-if="games">
    <div class="card mb-5 shadow-sm" v-if="games">
      <div class="row grid-container">
        <div v-for="game in games" :key="game.id" class="grid-item">
          <img
            class="card-img-top"
            alt="Card image cap"
            :src="game.background_image"
          />
          <p>
            {{ game.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['games'],
};
</script>

<style scoped>
.grid-item {
  cursor: pointer;
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
