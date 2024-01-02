<template>
  <div class="content">
    <h1>Profiles</h1>
    <div class="profiles">
      <ul>
        <li v-for="profile in profiles" :key="profile.id">
          <a href="#" @click="selectProfile(profile)">
            {{ profile.name }}
          </a>
        </li>
      </ul>
    </div>

    <div v-if="selectedProfile">
      <h1>Selected Profile</h1>
      <h2 class="username">Name: {{ selectedProfile.name }}</h2>
      <p>Age: {{ selectedProfile.age }}</p>
      <p>Occupation: {{ selectedProfile.occupation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllProfiles",
  data() {
    return {
      profiles: [
        {
          id: 1,
          name: "Muhammad Ehsan",
          age: 22,
          occupation: "Software Engineer",
        },
        {
          id: 2,
          name: "Ehsan ul Hassan",
          age: 23,
          occupation: "Web Designer",
        },
        {
          id: 3,
          name: "Blue Berry",
          age: 22,
          occupation: "Teacher",
        },
        // Add more profiles as needed
      ],
      selectedProfile: null,
    };
  },
  methods: {
    selectProfile(profile) {
      this.selectedProfile = profile;
    },
    
  },
};
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
.username {
  color: orange;
}
</style>
