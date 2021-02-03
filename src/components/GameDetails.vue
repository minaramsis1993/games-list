<template>
  <div class="game-details">
    Details
    {{ getSelectedGame }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getSelectedGame']),
  },
};
</script>

<style scoped></style>
