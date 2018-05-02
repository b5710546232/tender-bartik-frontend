<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" :href="'#/' + userProfile.role">V-leave</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!-- <li class="nav-item active">
          <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
        </li> -->
  
        <!-- <li class="nav-item">
            <a class="nav-link" href="#">Task</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Leave</a>
          </li> -->
  
        <li class="nav-item">
          <a class="nav-link" href="#">Edit profile</a>
        </li>
        <li v-if="userProfile.role == 'Supervisor'" class="nav-item">
          <a class="nav-link" href="#/supervisor/leave-history">Leave History</a>
        </li>
  
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item right">
          <a class="nav-link" @click="onLogout">Logout</a>
        </li>
      </ul>
  
      <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> -->
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .navbar {
    // box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-bottom: solid 2px #41b883;
    background: white !important;
  }
  
  .navbar-brand {
    color: #35495e;
    font-weight: 700;
  }
  
  a {
    cursor: pointer;
  }
</style>

<script>
  import Store from '../stores'
  export default {
    data() {
      return {
        userProfile:{}
      }
    },
    mounted() {
      this.userProfile = Store.User
      console.log(this.userProfile, 'user profile')
    },
    methods: {
      onLogout() {
        localStorage.clear()
        this.$router.push('/')
      }
    }
  }
</script>


