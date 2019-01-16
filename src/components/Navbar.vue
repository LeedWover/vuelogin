<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <a class="navbar-brand" href="#">Login app</a>

    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Sign In</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/registration">Sign Up</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>
