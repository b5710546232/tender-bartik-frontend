<template>
  <div class="container">
    <div class="backdrop" v-if="isLoading">
      <atom-spinner class="spinner" :animation-duration="1000" :size="150" :color="'#9FFD8D'" />
    </div>
    <div class="container card">
      <h1>Leave History</h1>
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
        myLeaves: {},
        isLoading: false
      }
    },
    mounted() {
      const headers = userService.getHeaders()
      this.isLoading = true
      leaveService.getMyLeaves(headers).then(leaves => {
        console.log('leave', leaves)
        this.myLeaves = leaves
        this.isLoading = false
      });
    },
    components: {
      AddTask,
      AtomSpinner
    }
  }
</script>
<style>
  .container {
    margin-top: 20px !important;
  }
</style>
