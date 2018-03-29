<template>
  <div class="modal-mask">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">

          <div class="modal-header">
            <h3 class="modal-title" id="myLargeModalLabel">Leave history</h3>
            <button type="button" class="btn btn-primary">
              Notifications <span class="badge badge-light">4</span>
            </button>
          </div>

          <div class="modal-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Subordinator</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Mark</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button> 
          </div>
        </div>
      </div>
    </div>
</template>
