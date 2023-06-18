<template>
    <nav class="navbar navbar-expand navbar-dark fixed-top">
        <div class="container">
            <router-link to="/">Home</router-link> |
            <router-link to="/projects">Projects</router-link> |
            <router-link to="/tasks">Tasks</router-link> |
                <a href="#">Profile</a> |
                <a @click="logOut()">LogOut</a>
        </div>        
    </nav>

</template>

<script >
import user from "../modules/user"

const { logOut } = user()


export default  {
    name: 'Nav',
    setup() {
        return {logOut}
    }

}
</script>

<style lang="scss" scoped>
a{
    text-decoration: underline;
}
</style>