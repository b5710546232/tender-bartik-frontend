<template>
  <div id="app">
    <span v-if="this.$route.name!=='Home'">
      <navbar></navbar>
    </span>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "app",
  mounted() {
    console.log(this.$route.name);
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../static/css/vue-modal.css";
#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
html,
body {
  height: 100%;
  width: 100%;
  background:#F8F9FA
}

h1,
h2 {
  font-weight: normal;
}
.backdrop{
  position: absolute;
  height:100%;
  width: 100%;
  background:rgba($color: #000000, $alpha: .7);
  z-index: 9998;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.spinner{
position:absolute; 
    top:50%; 
    left:50%; 
    transform:translate(-50%, -50%); 
    width:50%;
    z-index: 9999;
}
</style>
