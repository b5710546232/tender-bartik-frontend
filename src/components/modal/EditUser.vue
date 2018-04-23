<template>
    <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit user</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-3 col-form-label text-left">Email</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="staticEmail">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label text-left">Password</label>
                            <div class="col-sm-9">
                                <input type="password" class="form-control" placeholder="Password">
                            </div>
                        </div>
                         <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label text-left">Confirm password</label>
                            <div class="col-sm-9">
                                <input type="password" class="form-control"  placeholder="Password">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label text-left">Role</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control"  placeholder="">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label text-left">Department</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control"  placeholder="">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-primary">Save changes</button>
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
