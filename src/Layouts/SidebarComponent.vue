<template>
  <div class="sidebar">
    <div class="profile-detail">
      <div class="profile-img">
        <img src="ehsan.jpg" alt="" />
      </div>
      <div><h1>Ehsan</h1></div>
    </div>
    <div>
      <router-link v-for="route in routes" :key="route.path" :to="route.path" class="router-link">
        <div class="link-container">{{ route.label }}</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
const routes = [
  {
    path: "/Admin",
    label: "My Admin Profile",
  },
  {
    path: "/Inbox",
    label: "Inbox",
  },
  {
    path: "/Table",
    label: "Tables",
  },
  {
    path: "/Chart",
    label: "Charts",
  },
  {
    path: "/Settings",
    label: "Settings",
  },
];
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  padding: 0.5rem;
  /* overflow-y: auto; */
}
.profile-detail {
  padding: 0.5rem 1rem;
  display: flex;
  gap: 8px;
  align-items: center;
}
.profile-img {
  border-radius: 50%;
  overflow: hidden;
  /* background-color: red;
  padding: 1rem; */
  max-height: 3rem;
  min-height: 3rem;
  max-width: 3rem;
  min-width: 3rem;
}
.link-container {
  color: white;
  padding: 1rem;
  text-align: left;
}
.link-container:hover {
  background-color: white;
  color: teal;
}
.router-link{
  text-decoration:none;
}
</style>
