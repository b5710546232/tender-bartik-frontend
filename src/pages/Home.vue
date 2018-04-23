<template>
  <div class="root h-100 w-100 d-flex align-items-center justify-content-center flex-column">
    <div class="backdrop" v-if="isLoading">
      <atom-spinner class="spinner" :animation-duration="1000" :size="150" :color="'#9FFD8D'" />
    </div>
    <h1 class="text-header">V-leave</h1>

    <div class="login-container card">
      <h2>Log in to your account</h2>
      <form @submit.prevent="onLogin">
        <div class="form-group text-left">
          <label for="exampleInputEmail1 ">Username</label>
          <input v-model="username" type="text" class="form-control" placeholder="Username...">
        </div>
        <div class="form-group text-left">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="password" type="password" class="form-control" placeholder="Password...">
        </div>
        <button type="submit" class="form-btn btn btn-outline-primary">LOGIN</button>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.text-header {
  color: white;
  margin-bottom: 75px;
}
.root {
  background: #41b883;
}

h2 {
  font-size: 1.5rem;
}
.login-container {
  padding: 5% 15%;
  margin: 0 10%;
}
.form-btn {
  clear: both;
  margin-top: 16px;
}
</style>
<script>
import { AtomSpinner } from "epic-spinners";
import authService from "../services/auth";
import userService from "../services/user";
export default {
  components: {
    AtomSpinner
  },
  data() {
    return {
      username: "",
      password: "",
      isLoading: false
    };
  },
  methods: {
    checkStatus() {
      const token = userService.getAccessToken();
      if (token) {
        const headers = {
          "Content-Type": "application/json",
          Authorization: token
        };
        this.isLoading = true;
        userService
          .getMe(headers)
          .then(res => {
            console.log("userService", res);
            this.routeByRole(res.role);
            this.isLoading = false;
          })
          .catch(err => {
            console.error(err);
            this.isLoading = false;
          });
      }
    },
    onLogin() {
      const payload = {
        username: this.username,
        password: this.password
      };
      this.isLoading = true;
      authService
        .login(payload)
        .then(res => {
          if (res.token_type != undefined && res.access_token != undefined) {
            localStorage.setItem("token_type", res.token_type);
            localStorage.setItem("access_token", res.access_token);
            this.checkStatus();
          } else {
            localStorage.clear();
          }
          console.log(res);
        })
        .catch(error => {
          localStorage.clear();
          console.error(error);
          this.isLoading = false;
        });
    },
    routeByRole(role) {
      console.log("route", role);
      if (role === "Administrator") {
        console.log(this.$router);
        this.$router.push("/admin");
      }
    }
  },
  mounted() {
    this.checkStatus();
  }
};
</script>
