<template>
    <div class="form">
        <input label="email" type="text" placeholder="Email" v-model="uState.value.Email">
        <span> Test: {{ uState.value.Email }} </span>
        <input label="email" type="text" placeholder="Email" v-model="uState.value.Email">
        <span> Test: {{ uState.value.Password }} </span>

        <button label="Submit" type="submit">Submit</button>
    </div>
</template>
  
<script>
import { get } from "express/lib/response";
import user from "../modules/user";
import router from "vue-router";

export default {
  name: "LoginFrom",
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    async onSubmit() {
      const response = await axios.post("users/login", {
        email: this.email,
        pass: this.pass,
      })



  }
}
</script>    
  
  <style lang="scss">

  </style>