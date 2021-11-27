<template>
  <div class="app" :class="mode">
    <Header :mode="mode" @toggle="toggle" />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "app",
  data() {
    return {
      mode: "light",
    };
  },
  components: {
    Header,
  },
  created() {
    window.addEventListener("keyup", this.keyPress);
  },
  methods: {
    keyPress(e) {
      if (e.key === "t") {
        this.toggle();
      }
    },
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  text-decoration: none;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: white;
  color: #15202b;
  transition: background 0.3s ease-in-out;
}

.dark {
  background: #15202b;
  color: #e8e8e8;
}

.dark {
  .home {
    .text-section {
      a {
        color: white;
      }
    }
  }
}
</style>
