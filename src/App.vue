<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Nomadic logo"
      class="logo"
      src="@/assets/roundlogo.png"
      width="70"
      height="70"
    />

    <h1>Nomadic Program Sample</h1>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/colors.css";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  grid-gap: 20px;
  align-items: center;
  margin-bottom: 20px;
}
</style>
