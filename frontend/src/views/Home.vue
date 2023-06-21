<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.png"> 
    <h1>TaskForge</h1>
    <h3>Efficiency Unleashed</h3>
    <h4>Welcome here!</h4>

    <router-link  class="router-link" to="/register">
      <button class="action-button" label="Sign Up" outline color="orange">Sign up</button>
    </router-link>
    <router-link  class="router-link" to="/login">
      <button class="action-button" label="Log In" outline color="orange">Log in</button>
    </router-link>
    <div class="gradient"></div>


  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>

.home {
  text-align: center;
  margin-top: 100px;
  font-family: 'Trebuchet MS', 'Lucida Sans', Arial, sans-serif;
}

.title {
  font-size: 32px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 24px;
  color: #888;
  margin-bottom: 15px;
}

.welcome {
  font-size: 18px;
  margin-bottom: 30px;
}

.router-link {
  display: inline-block;
  margin-right: 10px;
}

.action-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: orange;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.action-button:hover {
  background-color: darkorange;
}
.gradient{
  background: linear-gradient(to top, #ff8c00, #ffffff);
  height: 50vh;
}
</style>