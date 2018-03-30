<template>
  <div class="root">
    <div class="container">
      <div class="row">
        <h1 class="text-left col-md-12">Profile
          <span class="badge badge-secondary">Subordinator</span>
        </h1>
        <div class="col-sm-12 col-sm-12 request-btn">
          <button type="button" class="btn btn-outline-success float-right" data-toggle="modal" data-target="#leaveFormModal">Request leave form</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-12">
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
        <div class="col-md-8 col-sm-12">
          <div class="row">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Task</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">2015-03-25</th>
                  <td>work1</td>
                </tr>
                <tr>
                  <th scope="row">2015-03-25</th>
                  <td>work2</td>
                </tr>
                <tr>
                  <th scope="row">2015-03-25</th>
                  <td>work3</td>
                </tr>
                <tr>
                  <th scope="row">2015-03-25</th>
                  <td>work4</td>
                </tr>
                <tr>
                  <th scope="row">2015-03-25</th>
                  <td>work5</td>
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

export default {
  data() {
    return {
      imgSrc:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1626e042cce%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1626e042cce%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.65%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
    };
  },
  components: {
    LeaveForm
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin-top: 20px;
  padding: 0 5%;
}
.description-profile {
  text-align: left;
}
.img-profile {
  text-align: left;
}
.request-btn{
  margin-bottom:10px;
  padding:0;
}
@media (max-width: 767px) {
  .img-profile,
  .description-profile {
    text-align: center;
  }
}
</style>

