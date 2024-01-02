<template>
  <div class="content">
    <div class="">
      <!-- <h1>{{ msg }}</h1> -->
      <h1>This is Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor
        et molestiae aut odio, incidunt obcaecati nesciunt assumenda asperiores
        ratione commodi cupiditate maiores deserunt amet quam tenetur quaerat
        similique temporibus?
      </p>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in technology" :key="item">{{ item }}</li>
      </ul>
      <ul><li v-for="item in users" :key="item.name">{{ item.name }} : {{ item.email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  // props: {
  //   msg: String
  // }
  data() {
    return {
      technology: ["java", "PHP", "Node", "Asp"],
      users: [
        {
          name: "Ehsan",
          email: "ehsan@gmail.com",
        },
        {
          name: "Awais",
          email: "awais@gmail.com",
        },
        {
          name: "Abdullah",
          email: "abdullah@gmail.com",
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
.list{
  text-align: left;
}
</style>
