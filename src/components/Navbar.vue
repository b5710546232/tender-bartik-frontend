<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" :href="'#/' + lower(userProfile.role)">V-leave</a>
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
          <a class="nav-link" href="#/editprofile">Edit profile</a>
        </li>
        <li v-if="userProfile.role == 'Supervisor'" class="nav-item">
          <a class="nav-link" href="#/supervisor/leave-history">Leave History</a>
        </li>
        <li class="nav-item">
          <div class="nav-link pointer" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#lineModal">Connect Line</div>
        </li>

      </ul>
      <ul class="navbar-nav ml-auto">
        <li v-if="userProfile.role == 'Supervisor'" class="nav-item right">
          <a class="nav-link" href="#/supervisor/notification">Notification( {{ notifications.length }} )</a>
        </li>
        <li class="nav-item right">
          <a class="nav-link" @click="onLogout">Logout</a>
        </li>
      </ul>

      <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> -->
    </div>

    <div id="lineModal" ref="lineModal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Connect Line</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="getImage()" alt="Image not found" class="rounded" width="200" height="200">
            <button class="btn btn-outline-primary" v-on:click="getOTP($event)" id="optdiv">Get OTP</button>`
           <div class="otp">
              Your otp is {{otp}}
           </div>
          </div>
          <div class="modal-footer">
          <!-- <button type="submit" class="btn btn-outline-primary">Confirm</button> -->
          <button type="button" class="btn btn-outline-secondary" @click="onCancel" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>

  </nav>
</template>

<style lang="scss" scoped>
.opt{
  display: flex;
  justify-content: center;
  text-align: center; 
}
button.close {
  display: none !important;
}
.navbar {
  // box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-bottom: solid 2px #41b883;
  background: white !important;
}

.navbar-brand {
  color: #35495e;
  font-weight: 700;
}
.pointer {
  cursor: pointer;
}
a {
  cursor: pointer;
}
</style>

<script>
import Store from "../stores";
import userService from "../services/user";
import LeaveService from "../services/leave";
import axios from '../services/axios';
export default {
  data() {
    return {
      userProfile: {},
      notifications: {},
      otp: '...'
    };
  },
  computed: {
    // opt () {
    //   this.opt = userService.getOTP();
    // }
  },
  methods: {
      onCancel() {
    },
    lower(s) {
      return String(s).toLowerCase();
    },
    onLogout() {
      localStorage.clear();
      this.$router.push("/");
    },
    notification() {
      const headers = userService.getHeaders();
      LeaveService.getPendingLeave(headers).then(res => {
        this.notifications = res;
      });
    },
    getImage() {
      if (this.userProfile.role == "Supervisor") {
        return "../../../static/assets/img/line-sup.png";
      }
      if (this.userProfile.role == "Subordinate") {
        return "../../../static/assets/img/line-sub.png";
      }
      if (this.userProfile.role == "Administrator") {
        return "../../../static/assets/img/line-admin.png";
      }
    },
    getOTP(event){
      let otpdiv = event.currentTarget;
      // let otpdiv = document.getElementById('otpdiv');
  userService.getOTP().then(res=>{
       this.otp = res.opt
     })
    },
    checkStatus() {
      const token = userService.getAccessToken();
      if (token) {
        const headers = {
          "Content-Type": "application/json",
          Authorization: token
        };
        userService
          .fetchMe(headers)
          .then(res => {
            console.log("Hello", res);
            this.userProfile = res;
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  },
  mounted() {
    this.notification();
    this.checkStatus();
  }
};
</script>



