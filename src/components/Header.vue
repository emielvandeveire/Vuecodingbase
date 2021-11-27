<template>
  <header>
    <Toggle :mode="mode" @toggle="$emit('toggle')" />

    <nav>
      <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
      <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
      <router-link :to="{ name: 'Library' }" class="nav-link"
        >Library</router-link
      >
      <router-link :to="{ name: 'Create' }" class="nav-link"
        >Create</router-link
      >
      <router-link :to="{ name: 'Code Editor' }" class="nav-link"
        >Code Editor</router-link
      >
    </nav>
    <router-view />
  </header>
</template>

<script>
import Toggle from "@/components/Toggle";
export default {
  props: ["mode"],
  components: {
    Toggle,
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  padding: 0px 25px;
  height: 60px;
  background: white;
  box-shadow: 0 0 3em 1em rgb(245, 245, 245);
  transition: background 0.3s ease-in-out;
}
.dark nav {
  background: #15202b;
  box-shadow: 0 0 15px 1px rgb(11, 18, 24);
}

nav h1 {
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 900;
}
header nav a {
  text-decoration: none;
}
.dark header nav a {
  color: white;
}
.light header nav a {
  color: #15202b;
}
</style>
