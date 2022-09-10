<template>
  <div class="centred-content">
    <md-content class="md-elevation-6" v-if="mode == 'login'">
      <h1>Login</h1>
      <!-- formulario login -->
      <div class="form">
        <md-field>
          <label>E-mail</label>
          <md-input v-model="user.email" autofocus></md-input>
        </md-field>
        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="user.password" type="password"></md-input>
        </md-field>
      </div>

      <md-button class="md-primary" @click="mode = 'register'"
        >Register</md-button
      >
      <md-button class="md-raised md-primary" @click="enter">Enter</md-button>
    </md-content>
    <md-content v-else>
      <h1>Register</h1>
      <!-- formulario register -->
      <div class="form">
        
        <md-field>
          <label>Name</label>
          <md-input v-model="user.name"></md-input>
        </md-field>
        <md-field>
          <label>Surname</label>
          <md-input v-model="user.surname"></md-input>
        </md-field>
        <md-field>
          <label>Email</label>
          <md-input v-model="user.email"></md-input>
        </md-field>
        <md-field>
          <label>Password</label>
          <md-input v-model="user.password"></md-input>
        </md-field>
        <md-button class="md-raised md-primary" @click="register"
          >Accept</md-button
        >
        <md-button class="md-raised md-primary" @click="mode = 'login'"
          >Cancel</md-button
        >
      </div>
    </md-content>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      mode: "login",
      user: {
        name: "",
        surname: "",
        email: "",
        img: "",
        password: "",
      },
    };
  },
  methods: {
    enter() {
      console.log("enter()");
      this.$model.login(
        this.user.email,
        this.user.password,
        (err, token, user) => {
          if (err) {
            alert("Error: " + err.stack);
          } else {
            this.$set(this.$user, "token", token);
            for (let att in user) this.$set(this.$user, att, user[att]);
          }
        }
      );
    },
    register() {
      console.log("register()");
      let user = {
        email: this.user.email,
        password: this.user.password,
        name: this.user.name,
        surname: this.user.surname,
      };
      this.$model.addUser(
        user,
        (err, addUser) => {
          if(err){
            alert("error: "+ err.stack);
          }else{}
          this.user.email = "";
          this.user.password = "";
          this.user.name = "";
          this.user.surname = "";
          this.user.mode = "login";
        }
      )
    },
    cancel() {
      console.log("cancel()");
    },
  },
};
</script>
<style scoped>
.centred-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.md-content {
  padding: 20px;
  width: 400px;
}
</style>
