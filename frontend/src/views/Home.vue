<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>TaskForge</h1>
    <h3>Efficiency Unleashed</h3>
    <h4>Welcome here!</h4>

    <router-link  class="router-link" to="/register">
      <button class="q-mr-xs q-px-xl" label="Sign Up" outline color="orange">Sign up</button>
    </router-link>
    <router-link  class="router-link" to="/login">
      <button class="q-mr-xs q-px-xl" label="Log In" outline color="orange">Log in</button>
    </router-link>


  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
