<template>
    <div class="login-form">
        <input type="text" placeholder="E-mail" v-model="uState.email">
        <br>
        <input type="text" placeholder="Password" v-model="uState.password">
        <br>
        <button @click="loginUser()">Log in</button>
        <router-link to="/register">
            <button>Sign up</button>
        </router-link>


    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>