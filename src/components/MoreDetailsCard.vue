<template>
  <div class="more-details">
    <div class="card mb-5 shadow-sm">
      <div class="card-body">
        <h4 class="card-title pb-2">{{ game.name }}</h4>
        <p class="info">Added: {{ game.added }} times.</p>
        <p class="info">
          Reviews Count:
          {{ game.reviews_count }}
        </p>
        <p class="info mb-3">Rating: {{ game.rating }}</p>
        <div class="d-flex mb-3">
          <span>Dominant color:</span>
          <div
            class="dominant-color-wrapper"
            :style="{ background: '#' + game.dominant_color }"
          ></div>
        </div>
        <p class="info">
          Platforms:
          <span
            v-for="(platform, index) in game.parent_platforms"
            :key="platform.id"
            >{{ platform.platform.name }}
            {{ index !== game.parent_platforms.length - 1 ? ',' : '' }}
          </span>
        </p>
        <p class="info">
          <small class="text-muted">Released: {{ game.released }}</small>
        </p>
        <button class="btn primary" @click="readMoreClicked = !readMoreClicked">
          {{ readMoreClicked ? 'Read Less' : 'Read More' }}
        </button>
        <p v-if="readMoreClicked">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          libero quisquam rem. Ipsum, error. Iste ab architecto laudantium
          tenetur a eveniet repellat quas. Odit aut nobis sequi eligendi
          accusantium provident dignissimos a, optio, consequuntur quibusdam
          delectus beatae pariatur ex eius alias cupiditate quidem eaque nulla
          ab consectetur quia asperiores. Repellat?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoreDetailsCard',
  props: {
    game: Object,
  },
  data() {
    return {
      readMoreClicked: false,
    };
  },
};
</script>

<style scoped>
.card-title {
  font-weight: bold;
}
.dominant-color-wrapper {
  margin-top: 6px;
  margin-left: 3px;
  width: 15px;
  height: 15px;
}
button.primary {
  padding: 0;
  color: var(--primary-color);
  font-weight: bold;
}

button.primary:focus {
  box-shadow: none;
}
p {
  transition: all 1s ease-out;
}
</style>
