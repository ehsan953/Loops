<template>
  <div class="sidebar">
    <div class="profile-detail">
      <img src="../assets/ehsan.jpg" alt="" class="profile-img" />
      <h1>Ehsan</h1>
    </div>
    <div>
      <router-link to="/Admin">
        <div class="link-container">My Admin Profile</div></router-link
      ><br />
      <router-link to="/Inbox"
        ><div class="link-container">Inbox</div></router-link
      ><br />
      <router-link to="/Tables"
        ><div class="link-container">Tables</div></router-link
      ><br />
      <router-link to="/Chart"
        ><div class="link-container">Charts</div></router-link
      ><br />
      <router-link to="/Settings"
        ><div class="link-container">Settings</div></router-link
      ><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  // props: {
  //   msg: String,
  // },
};
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
  height: 3rem;
  width: 3rem;
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
</style>
