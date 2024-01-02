<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <div class="main">
    <div class="column1"><SidebarComponent /></div>
    <div class="column2">
      <nav class="navbar">
        <router-link to="/"> <div class="nav-item">Home</div></router-link>
        <router-link to="/About"><div class="nav-item">About</div></router-link>
        <router-link to="/Contact"><div class="nav-item">Contact Us</div></router-link>
        <router-link to="/Profiles"><div class="nav-item">My All Profiles</div></router-link>
      </nav>
      <router-view></router-view>
      <!-- <HomePage msg="Welcome to Home Page" /> -->
    </div>
  </div>
</template>

<script>
// import HomePage from "./components/HomePage.vue";
import SidebarComponent from "./components/SidebarComponent.vue";

export default {
  name: "App",
  components: {
    // HomePage,
    SidebarComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.main {
  display: grid;
  grid-template-columns: 1fr 4fr;
}
.column1 {
  background-color: teal;
  color: white;
  height: 100vh;
  overflow-y: auto;
  /* width: 100vw; */
}
.navbar {
  background-color: rgb(86, 181, 151);
  color: white;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 1rem 2rem;
}
.nav-item{
  color: white;
}
</style>
