<template>
  <div class="profile-container">
    <h1>Welcome to your profile!</h1>
    <img alt="logo" src="../assets/profile.png">
    <div class="form-container">
      <input type="text" placeholder="Name" v-model="uState.name" class="form-input">
      <input type="text" placeholder="Username" v-model="uState.username" class="form-input">
      <input type="text" placeholder="Email" v-model="uState.email" class="form-input">
      <button class="edit-btn" @click="editUser()">Edit account</button>
<!--  
      <input type="password" placeholder="Password" v-model="uState.password" class="form-input">
      <button class="edit-btn" @click="editPass()">Edit password</button>
-->
    </div>
    <div class="gradient"></div>
  </div>
</template>

<script setup>
import user from '../modules/user';

const { uState } = user();
</script>

<style lang="scss" scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans', Arial, sans-serif;
}

img {
  height: 185px;
  width: 185px;
  margin: 5%;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.gradient{
  background: linear-gradient(to top, #ff8c00, #ffffff);
  height: 50vh;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-input {
  width: 250px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.edit-btn {
  background-color: #ff8c00;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.edit-btn:hover {
  background-color: #ff6600;
}

</style>
