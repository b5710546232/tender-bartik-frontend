<template>
  <div class="modal-mask">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">

          <div class="modal-header">
            <h3 class="modal-title" id="myLargeModalLabel">Assignment</h3>
          </div>

          <div class="modal-body">
            <form>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Task</label>
                    <div class="col-md-10">
                    <input type="text" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Subordinator</label>
                    <div class="col-md-10">
                    <input type="text" class="form-control">
                    </div>
                </div>
            </form>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button> 
            <button type="button" class="btn btn-success">Add</button> 
          </div>
        </div>
      </div>
    </div>
</template>
