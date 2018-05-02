<template>
  <div class="root">
    <div class="container">
      <div class="row">
  
        <div class="col-md-5 col-sm-12 profile-wrapper">
  
          <div class="col-sm-12" style="padding:0">
  
            <div class="profile card">
              <h2 class="text-center col-md-12">Profile
                <span class="badge badge-secondary">Subordinator</span>
              </h2>
              <div class="img-profile">
                <img :src="getImage()" alt="Image not found" class="rounded"
                width="200" height="200">
              </div>
              <div class="description-profile">
                <div>{{userProfile.fname}} {{userProfile.lname}}</div>
                <div>Department
                  <strong>@{{userProfile.department}}</strong>
                </div>
              </div>
            </div>
  
          </div>
  
          <div class="request-btn">
            <button type="button" class="col-sm-12 btn btn-outline-success float-right" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#leaveFormModal">Request leave form</button>
          </div>
        </div>
  
        <div class="col-md-7 col-sm-12 history-wrapper">
          <div class="row history card">
            <div class="col-md-12">
              <h2>History</h2>
            </div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Date start</th>
                  <th scope="col">Date end</th>
                  <th scope="col">Task ID</th>
                </tr>
              </thead>
              <tbody v-for="leave in myLeaves" :key="leave.id">
                <tr>
                  <td scope="row">{{leave.start}}</td>
                  <td scope="row">{{leave.end}}</td>
                  <td scope="row">{{leave.task_id}}</td>
                </tr>
  
              </tbody>
            </table>

            <!-- <div class="w-100">
              <nav aria-label="Page navigation example">
                <ul style="margin-top:0;" class="pagination float-right">
                  <li class="page-item">
                    <a class="page-link" href="#">Previous</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
             -->
          </div>
        </div>
  
      </div>
    <!-- <datetime class="datetime" v-model="date"></datetime> -->
    </div>
    <leave-form :tasks="myTasks" id="leaveFormModal"></leave-form>
  </div>
</template>

<script>
  import Store from '../../stores'
  import LeaveForm from "../../components/modal/LeaveForm";
  
  import userService from '../../services/user'
  import taskService from "../../services/task";
  import leaveService from "../../services/leave";
  export default {
    data() {
      return {
        imgSrc: "../../../static/assets/img/blank_profile.png",
        myTasks: [],
        myLeaves: [{
          start:"...",
          end:"...",
          task_id:"..."
        }],
        userProfile:{}
      };
    },
    mounted() {
      const headers = userService.getHeaders()

      userService.fetchMe(headers).then(meResponse=>{
        console.log(meResponse)
        this.userProfile = meResponse
      })
      taskService.getMyTask(headers).then(tasks => {
        console.log('tasks',tasks);
        this.myTasks = tasks
      }).catch(err => {
        console.error('Sub-Profile-getMyTaskError', err)
      })

      leaveService.getMyLeaves(headers).then(leaves => {
        console.log('this.myLeaves',leaves)
        this.myLeaves = leaves
      });
    },
    components: {
      LeaveForm
    },
    methods:{
      getImage(){
        const checkIsImage = (image_path)=>{
          if(String(image_path).substr(0,7)==="storage"){
            return true
          }
          return false
        }
        // console.log("checkIsImage",checkIsImage(this.userProfile.image_path ))
        if(this.userProfile.image_path && checkIsImage(this.userProfile.image_path )){
          return 'https://limitless-falls-39048.herokuapp.com/'+this.userProfile.image_path
        }
        return "../../../static/assets/img/blank_profile.png"
      }
    }
  };
</script>

<style lang="scss" scoped>
  // .shadow-box{
  //   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
  // }
  .container {
    margin-top: 20px;
    padding: 0 5%;
  }

  
  .description-profile {
    text-align: left;
    margin-left: 1rem;
  }
  
  .img-profile {
    text-align: center;
  }
  
  .profile-wrapper {
    padding: 0 16px;
  }
  
  .history {
    padding: 8px;
    // border: solid 1px grey;
    background: white;
  }
  
  .request-btn {
    margin-top: 16px;
    padding: 0;
    width: 100%;
  }
  
  .profile {
    padding: 8px;
    // border: solid 1px grey;
    background: white;
    text-align: center;
  }
  

  .bg-white {
    background: white;
  }
  
  @media (max-width: 767px) {
    .profile-wrapper {
      padding: 0;
      margin-bottom: 16px;
    }
    .history-wrapper {
      margin-bottom: 16px;
    }
    .img-profile,
    .description-profile {
      text-align: center;
      margin-left: 0;
    }
  }
</style>

