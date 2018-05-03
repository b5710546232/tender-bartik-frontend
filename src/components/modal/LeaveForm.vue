<template>
    <div ref="leaveFormModal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <form @submit.prevent="requestLeave">
                    <div class="modal-header">
                        <h5 class="modal-title">Leave form</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label text-left">Task ID</label>
                            <div class="col-sm-9">
                                <v-select name="taskID" v-model="leaveForm.id" :options="taskIDList" :class="{'invalid-dropdown': errors.has('taskID') }" v-validate="'required'" data-vv-delay="100"></v-select>
                            </div>
                            <!-- <div v-show="errors.has('role')" class="invalid-text">{{ errors.first('role') }}</div> -->
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label text-left">Start date</label>
                            <div class="col-sm-9">
                                <datetime class="margin-top-8 theme-green" v-model="leaveForm.startDate"></datetime>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label text-left">End date</label>
                            <div class="col-sm-9">
                                <datetime class="margin-top-8 theme-green" v-model="leaveForm.endDate"></datetime>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label text-left">Note</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" v-model="leaveForm.note">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label text-left">Type</label>
                            <div class="col-sm-9">
                                <v-select v-model="selected" :options="['Vacation leave','Personal Errand leave','Sick leave']"></v-select>
                                <input type="text" class="form-control" v-model="leaveForm.type">
                            </div>
                        </div>
                        <!-- <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label text-left">Subtitude name</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" v-model="leaveForm.subtitudeName">
                            </div>
                        </div> -->
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label text-left">Status</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" v-model="leaveForm.status">
                            </div>
                        </div>
                        {{taskIDList}}
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
import leave from "../../services/leave";

import moment from "moment-timezone";
import _ from "lodash";
export default {
  props: ["tasks"],
  data() {
    return {
      leaveForm: {
        startDate: "",
        endDate: "",
        status: "",
        subtitudeName: "",
        type: "",
        note: "",
        id: ""
      },
      taskIDList: []
    };
  },
  mounted() {
    this.tasks.map(item => {
      console.log("item", item);
    });
  },
  watch: {
    tasks: function(val) {
      this.taskIDList = _.map(_.uniqBy(this.tasks, e => {
        return e.id;
      }),(i)=>{
          return String(i.id)
      })
    }
  },
  methods: {
    requestLeave() {
      let form = _.clone(this.leaveForm);
      let payload = {
        start: moment(form.startDate).format("YYYY-MM-DD"),
        end: moment(form.endDate).format("YYYY-MM-DD"),
        type: form.type,
        note: form.note,
        task_id: parseInt(form.id),
        status: form.status
      };
      let headers = userService.getHeaders();
      leaveService
        .postLeave(payload, headers)
        .then(res => {
          console.log(res);
          $(this.$refs["leaveFormModal"]).modal("hide");
          this.leaveForm = {
            startDate: "",
            endDate: "",
            status: "",
            subtitudeName: "",
            type: "",
            note: "",
            id: ""
          };
        })
        .catch(err => {
          console.error(err);
          alert("error");
        });
      //   leaveService
    }
  }
};
</script>
<style lang="scss" scoped>
button.close {
  display: none !important;
}
button.clear {
  display: none !important;
}
i.open-indicator {
  margin-right: 10px;
}
/* Important part */
.modal-dialog {
  overflow-y: initial !important;
}
.modal-body {
  margin: 0;
  height: 320px;
  overflow-y: auto;
}
</style>
