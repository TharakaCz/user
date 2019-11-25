<template>
  <div class="container">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="card col-md-6 mx-auto login-box text-center shadow p-3 mb-5 bg-white rounded">
      <div class="card-body">
        <h5 class="card-title"><b>User Server</b> Login</h5>
        <h6 class="card-subtitle mb-2 text-muted">Login Frist Accsess Server</h6>
        <hr class="my-4">
        <form>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="email"><i class="fa fa-envelope"></i></span>
            </div>
            <input type="email" class="form-control" placeholder="User Email" v-model="email" name="email" aria-describedby="email" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="password"><i class="fa fa-key"></i></span>
            </div>
            <input type="password" class="form-control" placeholder="User Password" v-model="password" name="password" aria-describedby="password" />
          </div>
          <button type="button" class="btn btn-primary" @click="login()">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data(){
      return{
        email:"",
        password:""
      }
    },
    methods:{
      login:function() {
        let email = this.email;
        let password = this.password;

        axios.get("http://localhost:8082/app/users/login/"+email+"/"+password)
          .then(response=>{
            if(response.data !=null){
              localStorage.clear();
              this.$store.commit("setAuthentication",true);
              this.$session.start();
              this.$session.set('key',response.data.pid);
              localStorage.setItem('uname',response.data.name);
              localStorage.setItem('email',response.data.email);
              localStorage.setItem('image',response.data.image);
              localStorage.setItem('type',response.data.imageType);

              this.$router.push('/home');
            }else{
              alert("System Error Occurd ! (500 error)");
            }
          })
          .catch(e=>{
            this.error.push(e)
          });
        /*console.log("email :"+" "+email);
        console.log("password :"+" "+password);*/
      }
    }
  };
</script>

<style scoped>

</style>
