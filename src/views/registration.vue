<template>
  <div class="col-4 my-3 mx-auto">
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
          >
          <label for="emailPassword">Your Password</label>
          <br>
          <input
            id="emailPassword"
            class="form-control my-2"
            type="email"
            placeholder="Enter your password.."
          >
          <label for="emailPassword">Confirm Your Password</label>
          <br>
          <input
            id="emailPassword"
            class="form-control my-2"
            type="email"
            placeholder="Confirm your password.."
          >
          <button class="btn btn-primary mt-2" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registration"
};
</script>
