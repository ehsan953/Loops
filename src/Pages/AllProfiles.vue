<template>
  <div class="content">
    <h1>Profiles</h1>
    <div class="profiles">
      <ul>
        <li v-for="profile in profiles" :key="profile.id">
          <div @click="selectProfile(profile)">
            {{ profile.name }}
          </div>
        </li>
      </ul>
    </div>

    <div v-if="selectedProfile">
      <h1>Selected Profile</h1>
      <h2 class="username">Name: {{ selectedProfile.name }}</h2>
      <img :src="selectedProfile.img" class="profile-img" />
      <p>Age: {{ selectedProfile.age }}</p>
      <p>Occupation: {{ selectedProfile.occupation }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const selectedProfile = ref(null);
const profiles = [
  {
    id: 1,
    name: "Muhammad Ehsan",
    age: 22,
    occupation: "Software Engineer",
    img: "ehsan.jpg",
  },
  {
    id: 2,
    name: "Ehsan ul Hassan",
    age: 23,
    occupation: "Web Designer",
    img: "ehsan.jpg",
  },
  {
    id: 3,
    name: "Blue Berry",
    age: 22,
    occupation: "Teacher",
    img: "ehsan.jpg",
  },
  // Add more profiles as needed
];
function selectProfile(profile) {
  selectedProfile.value = profile;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 50%;
  text-align: center;
  margin: auto;
}
.profiles {
  text-align: left;
}
.profile-img {
  height: 10rem;
  width: 10rem;
  border-radius: 10%;
}
.username {
  color: orange;
}
</style>
