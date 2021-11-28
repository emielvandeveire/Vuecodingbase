<template>
  <div class="grid">
      <div id="html"></div>
      <div id="css"></div>
      <div id="js"></div>
      <div id="preview"></div>
  </div>
</template>

<script>
export default {
  name: "CodeEditor",
  methods: {

  }
}
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>