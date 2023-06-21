<template>
    <div class="register-form">
        <h2>Register here please!</h2>
        <div class="folder-body">
            <input v-model="uState.newuName" type="text" placeholder="Name" />
            <input v-model="uState.newUsername" type="text" placeholder="Username" />
            <input v-model="uState.newEmail" type="email" placeholder="Email" />
            <input v-model="uState.newPassword" type="password" placeholder="Password" />
            <button type="submit" @click="newUser()">Sign up</button>
        </div>
    </div>
    <div class="gradient"></div>

</template>

<script setup>
import user from '../modules/user';

const { uState, newUser } = user()
</script>

<style scoped>
.register-form {
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

.register-form input[type="text"],
.register-form input[type="email"],
.register-form input[type="password"] {
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.register-form button[type="submit"] {
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #ff8c00;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.register-form button[type="submit"]:hover {
  background-color: #ff6600;
}

.gradient{
  background: linear-gradient(to top, #ff8c00, #ffffff);
  height: 50vh;
}

</style>
