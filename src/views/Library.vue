<template>
  <div class="card-wrapper">
    <Card :post="post" v-for="(post, index) in cards" :key="index" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
  },
};
</script>

<style>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  justify-content: center;
}
</style>
