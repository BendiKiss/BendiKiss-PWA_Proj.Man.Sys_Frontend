<template>
  <div class="login-form">
    <h2>Please log in!</h2>

      <input type="text" placeholder="E-mail" v-model="uState.email">
      <br>
      <input type="password" placeholder="Password" v-model="uState.password">
      <br>
      <button type="submit" :disabled="!uState.email || !uState.password" @click="loginUser()">Log in</button>
      <router-link class="register" to="/register">
          <button>Register</button>
      </router-link>
      
  </div>
  <div class="gradient"></div>
</template>

<script>
import user from "../modules/user";

export default {
name: "LoginForm",

setup() {
  const { uState, loginUser } = user();

  return {
    uState,
    loginUser
  }
},
}
</script>

<style lang="scss" scoped>
.login-form {
max-width: 800px;
margin: 0 auto;
padding: 20px;
border: 1px solid #ccc;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.register-form h2 {
  font-size: 32px;
  text-align: center;
  margin-bottom: 32px;
  font-family: 'Trebuchet MS', 'Lucida Sans', Arial, sans-serif;
}

.login-form input[type="text"],
.login-form input[type="password"] {
width: 50%;
padding: 10px;
margin-bottom: 10px;
border-radius: 5px;
border: 1px solid #ccc;
font-size: 16px;
}

.login-form button[type="submit"] {
width: 50%;
padding: 10px;
border-radius: 5px;
border: none;
background-color: #ff8c00;
color: #fff;
font-weight: bold;
cursor: pointer;
transition: background-color 0.3s ease;
}

.login-form button[type="submit"]:hover {
background-color: #ff6600;
}

.login-form button {
width: 60%;
padding: 10px;
border-radius: 5px;
border: none;
background-color: #fff;
color: #ff8c00;
font-weight: bold;
cursor: pointer;
transition: background-color 0.3s ease;
margin-top: 10px;
}

.login-form button:hover {
background-color: #f5f5f5;
}

.gradient {
background: linear-gradient(to top, #ff8c00, #ffffff);
height: 50vh;
}
</style>
