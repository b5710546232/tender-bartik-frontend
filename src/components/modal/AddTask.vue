<template>
    <div ref="addTaskModal" class="modal fade" tabindex="-1" role="dialog">
      <div class="backdrop" v-if="isLoading">
        <atom-spinner class="spinner" :animation-duration="1000" :size="150" :color="'#9FFD8D'" />
      </div>
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <form @submit.prevent="requestLeave">
                  <div class="modal-header">
                    <h3 class="modal-title" id="myLargeModalLabel">Assignment</h3>
                  </div>
                  <!-- name status description assigner assignee -->
                  <div class="modal-body">
                    <form>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Name</label>
                            <div class="col-md-10">
                            <input type="text" class="form-control" name="name" v-model="taskForm.name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Status</label>
                            <div class="col-md-10">
                            <input type="text" class="form-control" name="status" v-model="taskForm.status">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Description</label>
                            <div class="col-md-10">
                            <textarea class="form-control" name="description" v-model="taskForm.description"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Subordinate</label>
                            <div class="col-md-10">
                              <select class="form-control" name="assignee" v-model="taskForm.assignee">
                                <option v-for="sub in subs" :key="sub.id" :value="sub.id">
                                  {{ sub.fname }} {{ sub.lname }} 
                                </option>
                              </select>
                            </div>
                        </div>
                    </form>
                  </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-outline-primary">Request</button>
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
import taskService from "../../services/task";
import userService from "../../services/user";
import leaveService from "../../services/leave";
import subService from "../../services/sub";
import leave from "../../services/leave";
import { AtomSpinner } from "epic-spinners"

import moment from 'moment-timezone'
import _ from 'lodash'
export default {
  // name status description assigner assignee
  data() {
    return {
      subs: [],
      taskForm: {
        name: "",
        status: "",
        description: "",
        assignee: ""
      },
      isLoading: false
    };
  },
  mounted() {
    const headers = userService.getHeaders()

    subService.getSubordinate(headers).then(subs => {
      console.log('subs', subs);
      this.subs = subs
    });
  },
  methods: {
    requestLeave() {
      const headers = userService.getHeaders()
      let form = _.clone(this.taskForm)
      console.log(form);
      this.isLoading = true
      let payload = {
        name: form.name,
        status: form.status,
        description: form.description,
        assignee: form.assignee
      };
        // let headers = userService.getHeaders()
        taskService.postTask(payload,headers).then(res=>{
            console.log(res)
            $(this.$refs["addTaskModal"]).modal("hide");
            this.isLoading = false
        }).catch(err=>{
            console.error(err)
        })
      //   leaveService
    }
  }
};
</script>
<style lang="scss" scoped>
button.close {
  display: none !important;
}
</style>

