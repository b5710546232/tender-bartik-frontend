<template>
  <div class="container">
    <div class="backdrop" v-if="isLoading">
      <atom-spinner class="spinner" :animation-duration="1000" :size="150" :color="'#9FFD8D'" />
    </div>
    <div class="container card">
      <h1>Notifications</h1>
      <div class="row">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Subordinator ID</th>
              <th scope="col">Type</th>
              <th scope="col">✔</th>
              <th scope="col">✘</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in pendingRequest" :key="request.id">
              <th>{{ request.start }}</th>
              <th scope="row">{{ request.end }}</th>
              <td>{{ request.substitution_id }}</td>
              <td>{{ request.type }}</td>
              <td><button type="button" class="btn btn-success" @click="confirmRequest(request.id)">Confirm</button></td>
              <td><button type="button" class="btn btn-danger" @click="rejectRequest(request.id)">Reject</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import userService from '../../services/user'
  import LeaveService from '../../services/leave'
  import { AtomSpinner } from "epic-spinners"
  export default {
    data() {
      return  {
        pendingRequest: [],
        isLoading: false
      }
    },
    methods: {
      notification() {
        const headers = userService.getHeaders()
        this.isLoading = true
        LeaveService.getPendingLeave(headers).then(res => {
          this.pendingRequest = res
          this.isLoading = false
        })
      },
      confirmRequest(requestID) {
        const headers = userService.getHeaders()
        this.isLoading = true
          LeaveService.confirmPendingLeave(requestID, headers).then(res => {
            console.log('confirm pending leave', res)
            this.notification()
            this.isLoading = false
          })
      },
      rejectRequest(requestID) {
        const headers = userService.getHeaders()
        this.isLoading = true
        LeaveService.rejectPendingLeave(requestID, headers).then(res => {
          console.log('reject pending leave', res)
          this.notification()
          this.isLoading = false
        })
      }
    },
    mounted() {
      this.notification()
    },
    components: {
      AtomSpinner
    }
  }
</script>
<style>
  .container {
    margin-top: 20px !important;
  }
</style>

