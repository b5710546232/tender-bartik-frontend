<template>
    <div ref="editUserModal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <form @submit.prevent="editUser">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit user</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- <v-select :options="options" v-model="email" v-validate:email="'required|email'" name="email" :class="{ danger: errors.has('email') }"></v-select>
  
  <span v-show="errors.has('email')" class="danger">
    {{ errors.first('email') }}
  </span> -->
                        <div class="row">
                            <div class="form-group col-md-6 text-left">
                                <label for="exampleInputEmail1 ">First name</label>
                                <input v-model="formUserData.firstname" name="first name" type="text" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('first name') }" placeholder="Enter your first name...">
                                <span v-show="errors.has('first name')" class="invalid-feedback">{{ errors.first('first name') }}</span>
                            </div>

                            <div class="form-group col-md-6 text-left">
                                <label>Last name</label>
                                <input v-model="formUserData.lastname" name="last name" type="text" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('last name') }" placeholder="Enter your Last name...">
                                <span v-show="errors.has('last name')" class="invalid-feedback">{{ errors.first('last name') }}</span>
                            </div>

                            <div class="form-group col-md-6 text-left">
                                <label>Address</label>
                                <input v-model="formUserData.address" type="text" name="address" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('address') }" placeholder="Address...">
                                <span v-show="errors.has('address')" class="invalid-feedback">{{ errors.first('address') }}</span>
                            </div>
                            <div class="form-group col-md-6 text-left">
                                <label>Telephone number</label>
                                <input v-model="formUserData.tel" type="text" name="telephone number" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('telephone number') }" placeholder="Tel... 0xxxxxxxxxx">
                                <span v-show="errors.has('telephone number')" class="invalid-feedback">{{ errors.first('telephone number') }}</span>
                            </div>
                            <div class="form-group col-md-6 text-left">
                                <label>Facebook</label>
                                <input v-model="formUserData.facebook" type="text" name="facebook" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('facebook') }" placeholder="Your Facebook...">
                                <span v-show="errors.has('facebook')" class="invalid-feedback">{{ errors.first('facebook') }}</span>
                            </div>
                            <div class="form-group col-md-6 text-left">
                                <label>instagram</label>
                                <input v-model="formUserData.ig" type="text" name="instagram" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('instagram') }" placeholder="Your IG...">
                                <span v-show="errors.has('instagram')" class="invalid-feedback">{{ errors.first('instagram') }}</span>
                            </div>
                            <div class="form-group col-md-6 text-left">
                                <label>Line</label>
                                <input type="text" v-model="formUserData.line" name="lineID" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('lineID') }" placeholder="Your Line ID">
                                <span v-show="errors.has('lineID')" class="invalid-feedback">{{ errors.first('lineID') }}</span>
                            </div>
                            <div class="form-group col-md-6 text-left">
                                <label>Department</label>
                                <input v-model="formUserData.department" type="text" name="department" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('department') }" placeholder="Department...">
                                <span v-show="errors.has('department')" class="invalid-feedback">{{ errors.first('department') }}</span>
                            </div>
                            <div class="form-group col-md-6 text-left">
                                <label>Role</label>

                                <v-select name="role" v-model="formUserData.role" :options="['Administrator','Supervisor','Subordinate']" :class="{'invalid-dropdown': errors.has('role') }" v-validate="'required'" data-vv-delay="100"></v-select>
                                <div v-show="errors.has('role')" class="invalid-text">{{ errors.first('role') }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-outline-primary">Confirm</button>
                        <button type="button" class="btn btn-outline-secondary" @click="onCancel" data-dismiss="modal">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
import userService from "../../services/user";
export default {
  props: ["userId"],
  data() {
    return {
      formUserData: {}
    };
  },
  methods: {
    onCancel() {
      this.formUserData = {};
      this.errors.clear();
    },
    editUser() {
      this.$validator.validateAll().then(result => {
        if (result) {
          let payload = {
            fname: this.formUserData.firstname,
            lname: this.formUserData.lastname,
            address: this.formUserData.address,
            telno: this.formUserData.tel,
            fb: this.formUserData.facebook,
            ig: this.formUserData.ig,
            department: this.formUserData.department,
            role: this.formUserData.role
          };
          userService
            .adminUpdateUserByID(this.userId, payload)
            .then(res => {
              console.log(res);
              $(this.$refs["editUserModal"]).modal("hide");
            })
            .catch(e => {
              console.error(e);
              alert('error')
              $(this.$refs["editUserModal"]).modal("hide");
            });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.modal-dialog {
  overflow-y: initial !important;
}
button.close {
  display: none !important;
}
.modal-body {
  margin: 0;
  height: 320px;
  overflow-y: auto;
}
</style>


