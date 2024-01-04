<template>
  <nav class="navbar">
    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      class="router-link"
    >
      <div class="nav-item">{{ route.label }}</div>
    </router-link>
  </nav>
</template>

<script setup>

// Define your routes as an array of objects
const routes = ([
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/About",
    label: "About",
  },
  {
    path: "/Contact",
    label: "Contact Us",
  },
  {
    path: "/Profiles",
    label: "My All Profiles",
  },
]);


</script>

<style scoped>
.navbar {
  background-color: rgb(86, 181, 151);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}
.nav-item {
  color: white;
}
.router-link {
  text-decoration: none;
}
</style>
