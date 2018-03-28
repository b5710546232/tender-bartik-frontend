<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <img :src="imgSrc" alt="..." class="rounded">
        </div>
        <div class="col-md-6" style="text-align: left;">
          <h1>Profile <span class="badge badge-secondary">Supervisor</span></h1>
          <h2>Hello</h2>
          <h2>Hello</h2>
          <h3>Go Go Go</h3>
        </div>
        <div class="col-md-3">
          <button type="button" class="btn btn-outline-primary btn-lg" @click="showLeaveHistoryModal = true">Leave History</button>
        </div>
      </div>
      <br />
      <div class="row">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Tasks</th>
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
      <div class="row">
        <button type="button" class="btn btn-outline-success btn-lg" @click="showAddTaskModal = true">Add Tasks</button>
        <nav aria-label="Page navigation example" style="margin: 0 auto;">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <LeaveHistory v-if="showLeaveHistoryModal" @close="showLeaveHistoryModal = false"/>
    <AddTask v-if="showAddTaskModal" @close="showAddTaskModal = false"/>
  </div>
</template>
<script>
  import LeaveHistory from '../../components/modal/LeaveHistory'
  import AddTask from '../../components/modal/AddTask'

  export default {
    data() {
      return {
        showLeaveHistoryModal: false,
        showAddTaskModal: false,
        imgSrc: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1626e042cce%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1626e042cce%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.65%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
      }
    },
    components: {
      LeaveHistory,
      AddTask
    }
  }
</script>
