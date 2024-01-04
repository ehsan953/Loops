<template>
  <div class="list">
    <h2>My Social Accounts Details</h2>
    <ul>
      <li v-for="item in users" :key="item.social">
        <h3>{{ item.social }}</h3>
        Username : {{ item.username }} <br />
        ({{ item.followers }} followers)
      </li>
    </ul>
  </div>
</template>

<script setup>
const users = [
{
social: "Facebook",
username: "Muhammad Ehsan",
followers: "2.5k",
},
{
social: "Instagram",
username: "Ehsan Rajpoot",
followers: "1.2k",
},
{
social: "LinkedIn",
username: "Muhammad Ehsan",
followers: "1.5k",
},
];
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  background-color: beige;
width: 45%;
text-align: left;
padding: 0 1rem;
}
</style>
