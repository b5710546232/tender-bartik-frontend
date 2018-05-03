<template>
    <div ref="addUserModal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <form @submit.prevent="addUser">
                    <div class="modal-header">
                        <h5 class="modal-title">Add user</h5>
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
                                <label>Password</label>
                                <input v-model="formUserData.password" type="password" name="password" v-validate="{ required:true,min:6}" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('password') }" placeholder="Password...">
                                <span v-show="errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</span>
                            </div>

                            <div class="form-group col-md-6 text-left">
                                <label>Confirm Password</label>
                                <input v-model="formUserData.confirmpassword" type="password" name="confirm password" v-validate="{ required:true,confirmed: 'password' }" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('confirm password') }" placeholder="Confirm password...">
                                <span v-show="errors.has('confirm password')" class="invalid-feedback">{{ errors.first('confirm password') }}</span>
                            </div>
                            
                            <div class="form-group col-md-6 text-left">
                                <label>Email</label>
                                <input v-model="formUserData.email" name="email" v-validate="'required|email'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('email') }" type="text" aria-describedby="emailHelp" placeholder="Enter email">
                                <span v-show="errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</span>
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
<!-- <input v-model="formUserData.role" type="text" name="role" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('role') }" placeholder="Role..."> -->  
                                <!-- :class="{'is-invalid': errors.has('role') }" -->
                                <v-select  name="role" 
                                v-model="formUserData.role"  
                                :options="['Administrator','Supervisor','Subordinate']"
                                :class="{'invalid-dropdown': errors.has('role') }"
                                v-validate="'required'" data-vv-delay="100" 
                                ></v-select> 
                                <div v-show="errors.has('role')" class="invalid-text">{{ errors.first('role') }}</div>
                            </div>

                             <div  v-if="formUserData.role=='Subordinate'" class="form-group col-md-6 text-left">
                                <label>Supervisor</label>
                                <v-select  name="supervisor" 
                                v-model="formUserData.supervisor"  
                                :options="supList"
                                :class="{'invalid-dropdown': errors.has('supervisor') }"
                                v-validate="''" data-vv-delay="100" 
                                ></v-select> 
                                <div v-show="errors.has('role')" class="invalid-text">{{ errors.first('supervisor') }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-outline-primary">Confirm</button>
                        <button type="button" class="btn btn-outline-secondary" @click="onCancel" data-dismiss="modal">Cancel</button>
                    </div>
                    <!-- {{supList}} -->
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
import adminService from "../../services/admin";
import userService from '../../services/user';
import _ from 'lodash'

export default {
  props: ["formUserData", "onAddUser"],
  data() {
    return {
        supList:[],
        supListOrigin:[]
    //     options: [
    //   'valid@gmail.com',
    //   'invalid email address',
    // ],
    // email: null
    };
  },
  mounted() {
    console.log(this.formUserData, "check");
    userService.getSupervisor().then(res=>{
        this.supListOrigin = _.clone(res)
        this.supList = res.map(i=> String(i.id+" "+i.fname+" "+i.lname) )
        console.log('supbList',this.supList)
    })
  },
  methods: {
    onCancel() {
      this.formUserData = {};
      this.errors.clear();
    },
    addUser() {
      console.log($);
      this.$validator.validateAll().then(result => {
        if (result) {
        //   alert("Form Submitted!");
          // this.onAddUser() // send to api
          let payload = {
            fname: this.formUserData.firstname,
            lname: this.formUserData.lastname,
            email: this.formUserData.email,
            password: this.formUserData.password,
            c_password: this.formUserData.confirmpassword,
            address: this.formUserData.address,
            telno: this.formUserData.tel,
            fb: this.formUserData.facebook,
            ig: this.formUserData.ig,
            line: this.formUserData.line,
            department: this.formUserData.department,
            role: this.formUserData.role
          }
          if(payload.role==='Subordinate'){
              payload['supervisor_id'] = this.formUserData.supervisor.split(' ')[0]
          }
          const authorization = `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
          const headers = {
              'Content-Type': 'application/json',
              'Authorization':authorization
          }
          console.log('auth-token',authorization)
            adminService.registerUser(payload,headers)
            .then(res => {
              $(this.$refs["addUserModal"]).modal("hide");
              alert("success")
              console.log(res)
              return;
            })
            .catch(err => {
                alert("error")
            });
        }else{
            alert("Correct them errors!");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
button.close {
  display: none !important;
}
.invalid-text{
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
}
// .invalid-dropdown
// .v-select .dropdown-toggle
.invalid-dropdown{
    border: solid 1px  #dc3545!important;
    border-radius: 5px;
    // border: 1px solid red;
    // background:red!important;
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


