<template>
  <div class="home">
    <div class="container">
      <div class="image"></div>
      <div class="text-section">
        <h1>Welcome to the codingbase!</h1>
        <p>
          the place where you can find cool code for your designs Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quos voluptatem minima
          rem reprehenderit, tempora unde harum magnam et maiores, totam
          dignissimos, earum voluptates deserunt aliquam ut nihil pariatur eius!
          Cum culpa quisquam nisi autem, totam tempora odio temporibus fuga
          delectus optio harum rerum reprehenderit, nemo reiciendis earum sit
          expedita praesentium.
        </p>
        <router-link :to="{ name: 'Library' }"
          >Check out the library now ></router-link
        >
      </div>
    </div>
    <div class="container">
      <div class="text-section">
        <h1>Welcome to the codingbase!</h1>
        <p>
          the place where you can find cool code for your designs Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quos voluptatem minima
          rem reprehenderit, tempora unde harum magnam et maiores, totam
          dignissimos, earum voluptates deserunt aliquam ut nihil pariatur eius!
          Cum culpa quisquam nisi autem, totam tempora odio temporibus fuga
          delectus optio harum rerum reprehenderit, nemo reiciendis earum sit
          expedita praesentium.
        </p>
        <router-link :to="{ name: 'Library' }"
          >Check out the library now ></router-link
        >
      </div>
      <div class="image"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  .home {
    display: flex;
    flex-direction: column;
    gap: 4rem 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    .container {
      width: 95%;
      height: 50vh;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 35px;
      overflow: hidden;
      .image {
        width: 50%;
        height: 100%;
        background: rgb(49, 1, 1);
      }
      .text-section {
        width: 50%;
        height: 100%;
        color: white;
        padding: 30px;
      }
    }
  }
}
.light .home .container .text-section {
  color: black;
  background: white;
}
.dark .home .container .text-section {
  background: #15202b;
}
.dark .home .container {
  box-shadow: 0px 2px 8px 0px rgb(11, 18, 24);
}
.light .home .container {
  box-shadow: 0px 2px 8px 0px #b0bec5;
}
</style>
