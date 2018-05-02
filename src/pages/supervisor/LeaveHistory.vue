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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Mark</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
        <nav aria-label="Page navigation example" style="margin: 0 auto;">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
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
