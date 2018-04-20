<template>
    <div class="root h-100 w-100 d-flex align-items-center justify-content-center flex-column">
        <h1 class="text-info">Tender-bartik</h1>
        <div class="login-container card">
            <h2>Login</h2>
            <form>
                <div class="form-group text-left">
                    <label for="exampleInputEmail1 ">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group text-left">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button type="button" class="form-btn btn btn-outline-primary">Submit</button>
                <button type="button" class="form-btn btn btn-outline-secondary">Create account</button>
            </form>
        </div>
        <div class="div">
            <h1>for test  page !</h1>
             <router-link class="nav-link" to="/admin"><strong>admin</strong></router-link>
             <router-link class="nav-link" to="/supervisor/profile"><strong>sup-profile</strong></router-link>
             <router-link class="nav-link" to="/subordinator/profile"><strong>subor-profile</strong></router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.root{
    // background: lightblue;
}

.login-container{
    padding:5% 15%;
    margin:0 10%;
}
.form-btn{
    clear: both;
    margin-top:16px;
}
</style>
