<template>
  <div id="login" class="col-4 my-3 mx-auto">
  <div class="card">
    <div class="card-header">Login Page</div>
    <div class="card-body my-2">
      <form @submit.prevent="logIn">
        <label for="emailInput">Your Email</label>
        <input
          id="emailInput"
          class="form-control my-2"
          type="email"
          placeholder="Enter your email here..."
          v-model="email"
        >
        <label for="emailPassword">Your Password</label>
        <br>
        <input
          id="emailPassword"
          class="form-control my-2"
          type="password"
          placeholder="Enter your password.."
          v-model="password"
        >
        <button class="btn btn-primary mt-2" type="submit">Login</button>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from '@/firebase';

export default {
  name: "login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            console.log(user);
            const myUser = user.user.email;
            alert(`You are logged in as ${myUser}`);
            
          },
          err => {
            alert(err.message);
          }
        );
    }
  }
};
</script>
