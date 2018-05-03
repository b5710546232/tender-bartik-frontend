<template>
<div class="container">
    <div class="backdrop" v-if="isLoading">
      <atom-spinner class="spinner" :animation-duration="1000" :size="150" :color="'#9FFD8D'" />
    </div>
    <div class="container card">
      <h1>Leave table</h1>
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
              <td scope="row">{{ leave.start }}</td>
              <td>{{ leave.leaver_id }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import userService from "../services/user";
import PictureInput from "vue-picture-input";
import leaveService from '../services/leave'
export default {
  data() {
    return {
      formUserData: {},
      image:'',
      userData:{},
      myLeaves:[],
      isLoading:false
    };
  },
  created(){
      leaveService.getAllLeaves().then(res=>{
          this.myLeaves = res
      }).then(res=>{
          setTimeout(()=>{
              window.print()
              window.close()
          },1000)
      })
  },
  methods: {
    
  },
  components: {
    PictureInput
  }
};
</script>
<style lang="scss" scoped>
</style>

