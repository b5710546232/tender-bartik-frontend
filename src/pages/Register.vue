<template>
    <div class="register-container">
        <div class="card container">
            <h2>Register</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6 text-left">
                        <label for="exampleInputEmail1 ">First name</label>
                        <input name="first name" type="text" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('first name') }" placeholder="Enter your first name...">
                        <span v-show="errors.has('first name')" class="invalid-feedback">{{ errors.first('first name') }}</span>
                    </div>

                    <div class="form-group col-md-6 text-left">
                        <label>Last name</label>
                        <input name="last name" type="text" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('last name') }" placeholder="Enter your Last name...">
                        <span v-show="errors.has('last name')" class="invalid-feedback">{{ errors.first('last name') }}</span>
                    </div>

                    <div class="form-group col-md-6 text-left">
                        <label>Password</label>
                        <input type="password" name="password" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('password') }" placeholder="Password...">
                        <span v-show="errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</span>
                    </div>

                    <div class="form-group col-md-6 text-left">
                        <label>Confirm Password</label>
                        <input type="password" name="confirm password" v-validate="{ required:true,confirmed: 'password' }" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('confirm password') }" placeholder="Confirm password...">
                        <span v-show="errors.has('confirm password')" class="invalid-feedback">{{ errors.first('confirm password') }}</span>
                    </div>

                    <div class="form-group col-md-6 text-left">
                        <label>Email</label>
                        <input name="email" v-validate="'required|email'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('email') }" type="text" aria-describedby="emailHelp" placeholder="Enter email">
                        <span v-show="errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</span>
                    </div>
                    
                    <div class="form-group col-md-6 text-left">
                        <label>Address</label>
                        <input type="text" name="address" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('address') }" placeholder="Address...">
                        <span v-show="errors.has('address')" class="invalid-feedback">{{ errors.first('address') }}</span>
                    </div>
                    <div class="form-group col-md-6 text-left">
                        <label>Telephone number</label>
                        <input type="text" name="telephone number" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('telephone number') }" placeholder="Tel... 0xxxxxxxxxx">
                        <span v-show="errors.has('telephone number')" class="invalid-feedback">{{ errors.first('telephone number') }}</span>
                    </div>
                    <div class="form-group col-md-6 text-left">
                        <label>Facebook</label>
                        <input type="text" name="facebook" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('facebook') }" placeholder="Your Facebook...">
                        <span v-show="errors.has('facebook')" class="invalid-feedback">{{ errors.first('facebook') }}</span>
                    </div>
                    <div class="form-group col-md-6 text-left">
                        <label>instagram</label>
                        <input type="text" name="instagram" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('instagram') }" placeholder="Your IG...">
                        <span v-show="errors.has('instagram')" class="invalid-feedback">{{ errors.first('instagram') }}</span>
                    </div>
                    <div class="form-group col-md-6 text-left">
                        <label>Line</label>
                        <input type="text" name="lineID" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('lineID') }" placeholder="Your Line ID">
                        <span v-show="errors.has('lineID')" class="invalid-feedback">{{ errors.first('lineID') }}</span>
                    </div>
                    <div class="form-group col-md-6 text-left">
                        <label>Department</label>
                        <input type="text" name="department" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('department') }" placeholder="Department...">
                        <span v-show="errors.has('department')" class="invalid-feedback">{{ errors.first('department') }}</span>
                    </div>
                    <div class="form-group col-md-6 text-left">
                        <label>Role</label>
                        <input type="text" name="role" v-validate="'required'" data-vv-delay="100" :class="{'form-control': true, 'is-invalid': errors.has('role') }" placeholder="Role...">
                        <span v-show="errors.has('role')" class="invalid-feedback">{{ errors.first('role') }}</span>
                    </div>
                </div>
                <button type="button" class="form-btn btn btn-outline-primary">btn</button>
                <button type="button" class="form-btn btn btn-outline-secondary">btn2</button>
            </form>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.register-container {
  margin-top: 10px;
  padding: 5% 10%;
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

