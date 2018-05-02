<template>
  <div class="root">
    <div class="backdrop" v-if="isLoading">
      <atom-spinner class="spinner" :animation-duration="1000" :size="150" :color="'#9FFD8D'" />
    </div>
    <div class="container">
      <div class="row">
  
        <div class="col-md-5 col-sm-12 profile-wrapper">
  
          <div class="col-sm-12" style="padding:0">
  
            <div class="profile card">
              <h2 class="text-center col-md-12">Profile
                <span class="badge badge-secondary">Supervisor</span>
              </h2>
              <div class="img-profile">
                <img :src="getImage()" alt="Image not found" class="rounded">
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
            <button type="button" class="col-sm-12 btn btn-outline-success float-right" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#addTaskModal">Add Task</button>
          </div>
        </div>
  
        <div class="col-md-7 col-sm-12 history-wrapper">
          <div class="row history card">
            <div class="col-md-12">
              <h2>Tasks</h2>
            </div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Subordinator</th>
                </tr>
              </thead>
              <tbody v-for="task in tasks" :key="task.id">
                <tr>
                  <td scope="row">{{task.name}}</td>
                  <td scope="row">{{task.description}}</td>
                  <td scope="row">{{task.assigner}}</td>
                </tr>
  
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
    <add-task id="addTaskModal"></add-task>
  </div>
</template>
<script>
  import Store from '../../stores'
  import AddTask from '../../components/modal/AddTask'
  import userService from '../../services/user'
  import taskService from "../../services/task"
  import leaveService from "../../services/leave"
  import { AtomSpinner } from "epic-spinners"

  export default {
    data() {
      return {
        imgSrc: "../../../static/assets/img/blank_profile.png",
        tasks: [],
        myLeaves: [{
          start:"...",
          end:"...",
          task_id:"..."
        }],
        userProfile:{},
        isLoading: false
      }
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
    },
    mounted() {
      this.userProfile = Store.User
      const headers = userService.getHeaders()
      this.isLoading = true
      userService.fetchMe(headers).then(meResponse=>{
        console.log(meResponse)
        Store.User = meResponse
        this.userProfile = Store.User
      })
      taskService.getMyTask(headers).then(tasks => {
        console.log('tasks',tasks);
        this.tasks = tasks
        this.isLoading = false
      }).catch(err => {
        console.error('Sub-Profile-getMyTaskError', err)
      })

      leaveService.getMyLeaves(headers).then(leaves => {
        this.myLeaves = leaves
      });
    },
    components: {
      AddTask,
      AtomSpinner
    }
  }
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

