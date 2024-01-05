<template>
  <div class="content">
    <div class="">
      <h1>This is Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor
        et molestiae aut odio, incidunt obcaecati nesciunt assumenda asperiores
        ratione commodi cupiditate maiores deserunt amet quam tenetur quaerat
        similique temporibus?
      </p>
    </div>
    <div class="list">
      <!-- ref template in List -->
      <ul>
        <li v-for="data in technology" :key="data" ref="dataRef">
          {{ data }}
        </li>
      </ul>
      <!--  -->
      <ul>
        <li v-for="item in users" :key="item.name">
          {{ item.name }} : {{ item.email }}
        </li>
      </ul>
    </div>

    <!-- using template ref -->
    <div>
      <label for="user">Username : </label>
      <input type="text" id="user" ref="inputRef" v-model="message" />
      <p>Username is : {{ message }}</p>
    </div>

    <!-- conditional rendering -->
    <div>
      <p v-if="status === 'active'">The status is active.</p>
      <p v-else-if="status === 'inactive'">The status is inactive.</p>
      <p v-else>The status is unknown.</p>
      <button @click="toggleVisibility">Toggle Visibility</button>
      <p v-show="isVisible">This paragraph will be Toggle.</p>
    </div>
  </div>

  <div>
    <h1>Computed : {{ comMsg }}</h1>
    <input type="text" v-model="a" />
    <input type="text" v-model="b" />
    <h1>watcher : {{ msg }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, watch, computed } from "vue";
const inputRef = ref(null);
const message = ref("");
console.log(inputRef.value);
onMounted(() => {
  // console.log(inputRef.value); // this console will give us reference of whole element
  inputRef.value.focus();
});
watchEffect(() => {
  if (inputRef.value) {
    inputRef.value.focus();
  } else {
    console.log("not mounted yet, or the element was unmounted");
    // not mounted yet, or the element was unmounted (e.g. by v-if)
  }
});

const msg = ref(0);
const a = ref(0);
const b = ref(0);
const comMsg = computed(() => {
  return Number(a.value) + Number(b.value);
});
watch(a, () => {
  msg.value = Number(a.value) + Number(b.value);
});
watch(b, () => {
  msg.value = Number(a.value) + Number(b.value);
});

const dataRef = ref(null);
onMounted(() => {
  console.log(dataRef.value);
});

const status = ref("active"); // conditional rendering
const isVisible = ref(true); // conditional rendering with v-show
function toggleVisibility() {
  isVisible.value = !isVisible.value;
}

const technology = ["java", "PHP", "Node", "Asp"];
const users = [
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
];
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 70%;
  text-align: center;
  margin: auto;
}
.list {
  text-align: left;
}
</style>
