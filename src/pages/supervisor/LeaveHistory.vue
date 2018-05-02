<template>
  <div class="container card">
    <h1>
      Leave History</h1>
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Subordinator</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="leave in myLeaves" :key="leave.id">
            <th scope="row">{{ leave.start }}</th>
            <td>{{ leave.substitution_id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import Store from '../../stores'
  // import LeaveForm from "../../components/modal/LeaveForm";
  // import LeaveHistory from '../../components/modal/LeaveHistory'
  import AddTask from '../../components/modal/AddTask'

  import userService from '../../services/user'
  import taskService from "../../services/task";
  import leaveService from "../../services/leave";

  export default {
    data() {
      return {
        myLeavess: {}
      }
    },
    mounted() {
      const headers = userService.getHeaders()
      leaveService.getMyLeaves(headers).then(leaves => {
        console.log('leave', leaves)
        this.myLeaves = leaves
      });
    },
    components: {
      AddTask
    }
  }
</script>
<style>
  .container {
    margin-top: 20px !important;
  }
</style>
