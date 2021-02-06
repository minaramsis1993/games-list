<template>
  <div class="genres">
    <div class="wrapper">
      <div
        :class="{
          item: true,
          active: getSelectedGenre && getSelectedGenre.id === genre.id,
        }"
        v-for="genre in getGenres"
        :key="genre.id"
        @click="genreClickHandler(genre)"
      >
        {{ genre.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "GenresSlider",
  computed: {
    ...mapGetters(["getGenres", "getSelectedGenre"]),
  },
  methods: {
    ...mapActions(["fetchGenres", "fetchGames", "selectGenre"]),
    genreClickHandler(genre) {
      // WILL selectGenre && fetchGames from the store
      this.selectGenre(genre);
      this.fetchGames();
    },
  },
  created() {
    this.fetchGenres();
  },
};
</script>

<style scoped>
.genres {
  background: #fff;
  box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.175);
}
.wrapper {
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}

.wrapper .item {
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 0.25rem 1.5rem;
  margin: 1rem 0.5rem;
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
  color: #545454;
}
.wrapper .active {
  background: var(--primary-color);
  color: #fff;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 4px grey;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 5px;
}
/* FOR MOBILES removing the scrollbar */
@media (max-width: 500px) {
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
