<template>
  <div class="card">
    <div class="image"></div>
    <div class="title">{{ post.title }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["post"],
};
</script>

<style lang="scss">
.dark .card-wrapper {
  .card {
    box-shadow: 0px 2px 8px 0px rgb(11, 18, 24);
    background-color: #15202b;
    .title {
      background-color: #111a24;
      color: white;
    }
  }
}

.card {
  overflow: hidden;
  box-shadow: 0px 2px 8px 0px #b0bec5;
  background-color: white;
  border-radius: 1rem;
  position: relative;
  margin: 0.5rem;

  .image {
    position: relative;
    height: 10rem;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .title {
    width: 100%;
    height: 45px;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    color: black;
    padding-left: 1rem;
    position: relative;
    background-color: rgb(245, 245, 245);
    text-align: start;
    display: flex;
    align-items: center;
  }
}
</style>
