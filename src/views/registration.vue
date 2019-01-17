<template>
  <div id="registration" class="col-4 my-3 mx-auto">
    <div class="card">
      <div class="card-header">You can register here</div>
      <div class="card-body my-2">
        <form>
          <label for="emailInput">Your Email</label>
          <input
            id="emailInput"
            class="form-control my-2"
            type="email"
            placeholder="Enter your email here..."
            v-model="email"
          >
          <label for="emailPassword">Your Password</label>
          <input
            id="emailPassword"
            class="form-control my-2"
            type="password"
            placeholder="Enter your password.."
            v-model="password"
          >
          <button @click.prevent="sendReg" class="btn btn-primary mt-2">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../db/config'
import firebase from 'firebase/app';
require("firebase/auth");
firebase.initializeApp(config);

export default {
  name: "registration",

  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    sendReg() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
    }

  }
};
</script>
