<template>
    <div class="root h-100 d-flex align-items-center">
        <div class="login-container card container">
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
                <button type="submit" class="btn btn-outline-primary">Submit</button>
                <button type="submit" class="btn btn-outline-secondary">Create account</button>
            </form>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.root{
    // background: lightblue;
}
.login-container{
    padding:16px;
}
</style>
