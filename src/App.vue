<template>
  <div class="main">
    <div class="sidebar-column"><SidebarComponent /></div>
    <div class="content-column">
      <NavbarComponent />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import SidebarComponent from "./Layouts/SidebarComponent.vue";
import NavbarComponent from "./Layouts/NavbarComponent.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  width: 100%;
  height: auto;
}
.main {
  display: grid;
  grid-template-columns: 1fr 4fr;
}
.sidebar-column {
  background-color: teal;
  color: white;
  height: 100vh;
  overflow-y: auto;
  /* width: 100vw; */
}
/* .content-column{
  background-color: antiquewhite;
} */
</style>
