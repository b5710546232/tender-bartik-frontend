<template>
  <div class="container">
    <div class="float-right print-btn">
      <button class="btn btn-primary">print statistic</button>
    </div>
    <table class="table table-bordered">
  <thead>
      <tr>
      <th scope="col">#</th>
      <th scope="col">User</th>
      <th scope="col">Role</th>
      <th scope="col">Department</th>
      <th scope="col">Manage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark Otto</td>
      <td>Admin</td>
      <td>Computer</td>
      <td><button class="btn btn-info">manage</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob Thornton</td>
      <td>Supervisor</td>
      <td>Computer</td>
      <td><button class="btn btn-info">manage</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Subordinator</td>
      <td>Computer</td>
      <td><button class="btn btn-info">manage</button></td>
    </tr>
  </tbody>
</table>
<button class="btn btn-primary float-right">Add user</button>
  </div>
</template>
<style lang="scss">
  .container{
    margin-top:20px;
  }
  .print-btn{
    margin-bottom:20px;
  }
</style>
