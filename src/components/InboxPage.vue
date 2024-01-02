<template>
  <div class="content">
    <div class="">
      <!-- <h1>{{ msg }}</h1> -->
      <h1>Your Chats with Friends</h1>
    </div>
  </div>
  <div class="list">
    <h2>Your Friends</h2>
    <ul>
      <li v-for="item in users" :key="item.social">
        <h3 class="friends">{{ item.username }}</h3>
        ({{ item.followers }} followers)
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InboxPage",
  // props: {
  //   msg: String
  // }
  data() {
    return {
      users: [
        {
          username: "Muhammad Ehsan",
          followers: "2.5k",
        },
        {
          username: "Ehsan Rajpoot",
          followers: "1.2k",
        },
        {
          username: "Abdullah Murad",
          followers: "1.5k",
        },
        {
          username: "Awais Somroo",
          followers: "1.5k",
        },
        {
          username: "Raheel Niaz",
          followers: "1.5k",
        },
      ],
    };
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
.friends {
  color: orange;
}
.list {
  text-align: left;
  padding: 0 1rem;
}
</style>
