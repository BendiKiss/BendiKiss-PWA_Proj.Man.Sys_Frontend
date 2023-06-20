<template>
    <div class="register-form">
        <h2>Register</h2>
        <div class="folder-body">
            <input v-model="uState.newuName" type="text" placeholder="Name" />
            <input v-model="uState.newUsername" type="text" placeholder="Username" />
            <input v-model="uState.newEmail" type="email" placeholder="Email" />
            <input v-model="uState.newPassword" type="password" placeholder="Password" />
            <button type="submit" @click="newUser()">Sign up</button>
        </div>
    </div>
</template>

<script setup>
import user from '../modules/user';

const { uState, newUser} = user()
</script>

<style>

</style>