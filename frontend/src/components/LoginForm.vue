<template>
    <div class="login-form">
        <input type="text" placeholder="E-mail" v-model="uState.email">
        <br>
        <input type="text" placeholder="Password" v-model="uState.password">
        <br>
        <button type="submit" v-if=" !uState.email || !uState.password " disabled @click="loginUser()">Log in</button>
        <button type="submit" v-else  @click="loginUser()">Log in</button>
        <router-link to="/register">
            <button>Register</button>
        </router-link>


    </div>
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

</style>