<template>
  <div class="">
    <h2 class="text-center">Add User</h2>
    <hr class="my-4">
   <div class="row justify-content-center">
     <form class="col-mx-10 mx-auto">
       <div class="input-group mb-3">
         <div class="input-group-prepend">
           <span class="input-group-text" id="name">Name</span>
         </div>
         <input type="text" class="form-control" placeholder="Enter Your Name" name="name" aria-label="name" aria-describedby="name" />
       </div>
       <div class="input-group mb-3">
         <div class="input-group-prepend">
           <span class="input-group-text" id="email">Email</span>
         </div>
         <input type="email" class="form-control" placeholder="Enter Your Email" name="email" aria-label="email" aria-describedby="email" />
       </div>
       <div class="input-group mb-3">
         <div class="input-group-prepend">
           <span class="input-group-text" id="bdate">Birth Date</span>
         </div>
         <input type="date" class="form-control" placeholder="dd/mm/yyyy" name="bdate" aria-label="bdate" aria-describedby="bdate" />
       </div>
       <div class="input-group mb-3">
         <div class="input-group-prepend">
           <span class="input-group-text" id="gender">Gender</span>
         </div>
         <div class="btn-group btn-group-toggle" data-toggle="buttons">
           <label class="btn btn-secondary">
             <input type="radio" name="male" id="male" autocomplete="off"> Male
           </label>
           <label class="btn btn-secondary">
             <input type="radio" name="female" id="female" autocomplete="off"> Female
           </label>
         </div>
       </div>
       <div class="input-group mb-3">
         <div class="input-group-prepend">
           <label class="input-group-text" for="inputGroupSelect01">Role</label>
         </div>
         <select class="custom-select" id="inputGroupSelect01">
           <option selected>Choose One</option>
           <option value="1">ADMIN</option>
           <option value="2">CLIENT</option>
         </select>
       </div>
       <div class="input-group mb-3">
         <div class="input-group-prepend">
           <span class="input-group-text" id="password">Password</span>
         </div>
         <input type="password" class="form-control" placeholder="Enter Password" name="password" aria-label="password" aria-describedby="password" />
       </div>
       <div class="input-group mb-3">
         <div class="input-group-prepend">
           <span class="input-group-text" id="cpassword">Confirm Password</span>
         </div>
         <input type="password" class="form-control" placeholder="Re-Enter Password" name="cpassword" aria-label="cpassword" aria-describedby="cpassword" />
       </div>
       <button type="button" class="btn btn-primary">Save</button>
     </form>
   </div>
  </div>
</template>

<script>
  export default {
    name: 'AddUser'
  };
</script>

<style scoped>

</style>
