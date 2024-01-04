<template>
  <div class="content">
    <div class="">
      <h1>Admin Profile Page</h1>
    </div>
    <div class="container">
      <SocialAccounts />
      <SocialDetails />
    </div>
  </div>
</template>

<script setup>
import SocialAccounts from '../components/HomePageComponents/SocialAccounts.vue';
import SocialDetails from '../components/HomePageComponents/SocialDetails.vue';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  margin: auto;
}
.container{
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
