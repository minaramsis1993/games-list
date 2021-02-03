<template>
  <div
    class="card mb-5 shadow-sm"
    v-if="featuredGame"
    @click="$emit('new-game-selected', featuredGame)"
  >
    <div class="row">
      <div class="col-md-8 col-12">
        <img
          class="card-img-top"
          alt="Card image cap"
          :src="featuredGame.background_image"
        />
      </div>
      <div class="col-md-4 col-12 p-5">
        <h5 class="card-title mb-4">
          {{ featuredGame.name }}
        </h5>
        <p class="info">Added: {{ featuredGame.added }} times.</p>
        <p class="info">
          Reviews Count:
          {{ featuredGame.reviews_count }}
        </p>
        <p class="info">Rating: {{ featuredGame.rating }}</p>
        <p class="info">
          <small class="text-muted"
            >Released: {{ featuredGame.released }}</small
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['featuredGame'],
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
.card-title {
  font-size: 1.7rem;
}
p.info {
  padding: 0;
  margin: 0.5rem 0;
  font-size: 1.1rem;
}
</style>
