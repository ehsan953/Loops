<template>
  <div class="content">
    <div class="">
      <h1>This is Table Page</h1>
    </div>
  </div>
  <div class="list">
    <h2>Your Tables</h2>
    <table>
      <tr>
        <td v-for="item in title" :key="item">{{ item }}</td>
      </tr>
      <tr></tr>
    </table>

    <ul>
      <li v-for="item in users" :key="item.social">
        <h3 class="friends">{{ item.username }}</h3>
        ({{ item.followers }} followers)
      </li>
    </ul>
  </div>
</template>

<script setup>
const title = ["Facebook", "Instagram", "Tiktok"];
const users = [
  {
    username: "Muhammad Ehsan",
    followers: "2.5k",
  },
];
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 50%;
  text-align: center;
  margin: auto;
}
.friends {
  color: orange;
}
.list {
  text-align: left;
  padding: 0 1rem;
}
</style>
