<template>
    <div class="login-form">
        <input type="text" placeholder="E-mail" v-model="uState.email">
        <br>
        <input type="text" placeholder="Password" v-model="uState.password">
        <br>
        <button @click="loginUser()">Log in</button>
        <router-link to="/register">
            <button>Register</button>
        </router-link>


    </div>
</template>

<script setup>
import user from "../modules/user";

const { uState, loginUser } = user();

/* export default {
  name: "LoginFrom",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      const response = await axios.post("user/login", {
        email: this.email,
        password: this.pass,
      });  

    }
  }
}
*/
 </script>

<style lang="scss" scoped>

</style>