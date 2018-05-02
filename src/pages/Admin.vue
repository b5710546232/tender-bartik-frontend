<template>
  <div class="container">
    <div class="float-right print-btn">
      <button class="btn btn-outline-primary" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#addUserModal">Add user</button>
      <button class="btn btn-outline-info" @click="print">print statistic</button>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">User</th>
          <th scope="col">Role</th>
          <th scope="col">Department</th>
          <th scope="col">Manage</th>
        </tr>
      </thead>

      <tbody v-for="user in userList" :key="user.id">
        <tr>
          <th scope="row">{{user.id}}</th>
          <td>{{user.fname}} {{user.lname}}</td>
          <td>{{user.role}}</td>
          <td>{{user.department}}</td>
          <td>
            <button class="btn btn-outline-info" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#editUserModal" @click="onSelect(user.id)">edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <edit-user id="editUserModal" :user-id="selectuserID"></edit-user>
    <add-user :form-user-data="formUserData" :on-add-user="onAddUser" id="addUserModal"></add-user>
    <!-- {{formUserData}} -->
    <!-- http://localhost:8081/#/supervisor/leave-history -->
  </div>
</template>
<script>
import AddUser from '../components/modal/AddUser'
import EditUser from '../components/modal/EditUser'
import userService from '../services/user'
export default {
    components: {
    EditUser,
    AddUser
  },
  data(){
    return{
      formUserData:{},
      userList:[],
      selectuserID:0
    }
  },
  mounted(){
    userService.getAllUser().then(res=>{
      this.userList = res
      console.log(this.userList)
    })
  },
  methods:{
    onAddUser(){
      
    },
    print(){
      const  yourURL  = 'http://http://vleave.ivaa.space/#/print'
       var w = window.open(yourURL)
    w.focus()
    },
    onSelect(id){
      this.selectuserID = id
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
}
.print-btn {
  margin-bottom: 20px;
}
</style>
