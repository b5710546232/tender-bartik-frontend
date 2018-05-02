<template>
    <div class="register-container">
        <div class="card container">
            <h2>Edit your profile</h2>
            <form @submit.prevent="uploadPhoto">
                <div class="picInput">

                    <div class="row">

                        <picture-input ref="pictureInput" @change="onChanged" width="200" height="200" margin="16" accept="image/jpeg,image/png" size="10" buttonClass="btn" :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag or select your picture!'
      }">
                        </picture-input>
                    </div>
                    <div class="row uploadbtn margin-top-16">
                        <button type="submit" class="btn btn-outline-primary">Upload</button>
                    </div>
                </div>
            </form>
            <form @submit.prevent="editUser">
                <div class="row">
                    <div class="form-group col-md-6 text-left">
                        <label>First name</label>
                        <input v-model="formUserData.firstname" name="first name" type="text" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('first name') }" placeholder="Enter your first name...">
                        <span v-show="errors.has('first name')" class="invalid-feedback">{{ errors.first('first name') }}</span>
                    </div>

                    <div class="form-group col-md-6 text-left">
                        <label>Last name</label>
                        <input v-model="formUserData.lastname" name="last name" type="text" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('last name') }" placeholder="Enter your Last name...">
                        <span v-show="errors.has('last name')" class="invalid-feedback">{{ errors.first('last name') }}</span>
                    </div>

                    <!-- <div class="form-group col-md-6 text-left">
                        <label>Email</label>
                        <input v-model="formUserData.email" name="email" v-validate="'required|email'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('email') }" type="text" aria-describedby="emailHelp" placeholder="Enter email">
                        <span v-show="errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</span>
                    </div> -->

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
                    <!-- <div class="form-group col-md-6 text-left"> -->
                        <!-- <label>Role</label> -->
                        <!-- <input v-model="formUserData.role" type="text" name="role" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('role') }" placeholder="Role..."> -->
                        <!-- :class="{'is-invalid': errors.has('role') }" -->
                        <!-- <v-select name="role" v-model="formUserData.role" :options="['Administrator','Supervisor','Subordinate']" :class="{'invalid-dropdown': errors.has('role') }" v-validate="'required'" data-vv-delay="100"></v-select> -->
                        <!-- <div v-show="errors.has('role')" class="invalid-text">{{ errors.first('role') }}</div> -->
                    <!-- </div> -->
                </div>
                <div class="">
                    <button type="submit" class="btn btn-outline-primary">Confirm</button>
                    <!-- <button type="button" class="btn btn-outline-secondary"  data-dismiss="modal">Cancel</button> -->
                </div>
            </form>
        </div>
        <!-- {{userData}} -->
    </div>
</template>
<script>
import $ from "jquery";
import userService from "../services/user";
import PictureInput from "vue-picture-input";

export default {
  data() {
    return {
      formUserData: {},
      image:'',
      userData:{}
    };
  },
  mounted(){
  },
  methods: {
    onChanged() {
      console.log("New picture loaded");
      if (this.$refs.pictureInput.file) {
        this.image = this.$refs.pictureInput.file;
      } else {
        console.log("Old browser. No support for Filereader API");
      }
    },
    editUser() {
      console.log($);
      this.$validator.validateAll().then(result => {
        if (result) {
        //   alert("Form Submitted!");
          // this.onAddUser() // send to api
          let payload = {
            fname: this.formUserData.firstname,
            lname: this.formUserData.lastname,
            // email: this.formUserData.email,
            address: this.formUserData.address,
            telno: this.formUserData.tel,
            fb: this.formUserData.facebook,
            ig: this.formUserData.ig,
            line: this.formUserData.line,
            // role: this.formUserData.role,
            department: this.formUserData.department
          }
          userService.updateUserByID(payload).then(res=>{
            console.log('200')
            this.formUserData = {}
        }).catch(e=>{
            console.error('edituser error')
        })
         
        }else{
            alert("Correct them errors!");
        }
      });
    },
    uploadPhoto() {
      userService
        .uploadProfile(this.image)
        .then(res => {
          console.log("200");
        })
        .catch(e => {
          console.error("error");
        });
    }
  },
  components: {
    PictureInput
  }
};
</script>
<style lang="scss" scoped>
// button.btn{
// @extend .form-control;
//   btn-outline-primary
// }
.register-container {
  margin-top: 10px;
  padding: 5% 10%;
}
.picInput {
  margin-bottom: 16px;
}
.uploadbtn {
  display: flex;
  justify-content: center;
}
.margin-btm-16 {
  margin-bottom: 16px;
}
.margin-top-16 {
  margin-top: 16px;
}
.container {
  padding: 5% 10%;
  margin: 0 5%;
}
.form-btn {
  clear: both;
  margin-top: 16px;
}
</style>

