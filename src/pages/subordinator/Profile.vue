<template>
  <div class="root">
    <div class="container">
      <div class="row">

        <div class="col-md-5 col-sm-12 profile-wrapper">

          <div class="col-sm-12" style="padding:0">

            <div class="profile card">
              <h2 class="text-center col-md-12">Profile
                <span class="badge badge-secondary">Subordinator</span>
              </h2>
              <div class="img-profile">
                <img :src="imgSrc" alt="..." class="rounded">
              </div>
              <div class="description-profile">
                <div>John Doe</div>
                <div>Department
                  <strong>@Computer</strong>
                </div>
              </div>
            </div>

          </div>

          <div class="request-btn">
            <button type="button" class="col-sm-12 btn btn-outline-success float-right" data-toggle="modal" data-target="#leaveFormModal">Request leave form</button>
          </div>
        </div>

        <div class="col-md-7 col-sm-12 history-wrapper card">
          <div class="row history">
            <div class="col-md-12">
              <h2>History</h2>
            </div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Date start</th>
                  <th scope="col">Date end</th>
                  <th scope="col">Task</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">2015-03-25</td>
                  <td scope="row">2015-03-25</td>
                  <td>work1</td>
                </tr>
                <tr>
                  <td scope="row">2015-03-25</td>
                  <td scope="row">2015-03-25</td>
                  <td>work2</td>
                </tr>
                <tr>
                  <td scope="row">2015-03-25</td>
                  <td scope="row">2015-03-25</td>
                  <td>work2</td>
                </tr>
                <tr>
                  <td scope="row">2015-03-25</td>
                  <td scope="row">2015-03-25</td>
                  <td>work2</td>
                </tr>
                <tr>
                  <td scope="row">2015-03-25</td>
                  <td scope="row">2015-03-25</td>
                  <td>work2</td>
                </tr>

              </tbody>
            </table>
            <div class="w-100">
              <nav aria-label="Page navigation example">
                <ul style="margin-top:0;" class="pagination float-right">
                  <li class="page-item">
                    <a class="page-link" href="#">Previous</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </div>

    </div>

    <leave-form id="leaveFormModal"></leave-form>
  </div>
</template>

<script>
import LeaveForm from "../../components/modal/LeaveForm";
import TaskService from "../../services/task";
import LeaveService from "../../services/leave";
export default {
  data() {
    return {
      imgSrc:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1626e042cce%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1626e042cce%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.65%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
    };
  },
  mounted() {
    TaskService.getAllTask().then(tasks => {
      console.log(tasks);
    });
    LeaveService.getAllLeaves().then(leaves => {
      console.log("leaves", leaves);
    });
  },
  components: {
    LeaveForm
  }
};
</script>

<style lang="scss" scoped>
// .shadow-box{
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
// }
.container {
  margin-top: 20px;
  padding: 0 5%;
}
.description-profile {
  text-align: left;
  margin-left: 1rem;
}
.img-profile {
  text-align: center;
}

.profile-wrapper {
  padding: 0 16px;
}
.history {
  padding: 8px;
  // border: solid 1px grey;
  background: white;
}

.request-btn {
  margin-top: 16px;
  padding: 0;
  width:100%;
}
.profile {
  padding: 8px;
  // border: solid 1px grey;
  background: white;
  text-align: center;
}
.bg-white {
  background: white;
}

@media (max-width: 767px) {
  .profile-wrapper {
    padding: 0;
    margin-bottom: 16px;
  }
  .history-wrapper {
    margin-bottom: 16px;
  }
  .img-profile,
  .description-profile {
    text-align: center;
    margin-left: 0;
  }
}
</style>

