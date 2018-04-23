<template>
  <div class="container">
    <div class="float-right print-btn">
      <button class="btn btn-outline-primary">print statistic</button>
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
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark Otto</td>
      <td>Admin</td>
      <td>Computer</td>
      <td><button class="btn btn-outline-info" data-toggle="modal" data-target="#editUserModal" >edit</button></td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob Thornton</td>
      <td>Supervisor</td>
      <td>Computer</td>
      <td><button class="btn btn-outline-info" data-toggle="modal" data-target="#editUserModal" >edit</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Subordinator</td>
      <td>Computer</td>
      <td><button class="btn btn-outline-info" data-toggle="modal" data-target="#editUserModal" >edit</button></td>
    </tr>
  </tbody>
</table>
<button class="btn btn-outline-primary float-right" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#addUserModal" >Add user</button>
<edit-user id="editUserModal"></edit-user>
<add-user :form-user-data="formUserData" :on-add-user="onAddUser" id="addUserModal"></add-user>
{{formUserData}}
  </div>
</template>
<script>
import AddUser from '../components/modal/AddUser'
import EditUser from '../components/modal/EditUser'
export default {
    components: {
    EditUser,
    AddUser
  },
  data(){
    return{
      formUserData:{}
    }
  },
  methods:{
    onAddUser(){
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    margin-top:20px;
  }
  .print-btn{
    margin-bottom:20px;
  }
</style>
