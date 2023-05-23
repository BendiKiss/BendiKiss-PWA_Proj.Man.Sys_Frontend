<template>
    <div class="register-form">
        <h2>Register</h2>
        <div class="folder-body">
            <input type="text" placeholder="Name" v-model="uState.name">
            <input type="email" placeholder="Email" v-model="uState.email">
            <input type="password" placeholder="Password" v-model="uState.password">
            <button @click="newUser()">Sign up</button>
        </div>
    </div>
</template>

<script setup>
import user from '../modules/user';

const { uState, newUser} = user()
</script>

<style>

</style>