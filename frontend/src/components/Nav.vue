<template>
    <nav class="navbar navbar-expand navbar-dark fixed-top">
        <div class="container">
            <router-link to="/">Home</router-link> |
            <router-link to="/projects">Projects</router-link> |
            <router-link to="/tasks">Tasks</router-link> |
            <li class="profile">
                <a href="#">Profile</a>
            </li>
            <li class="logout">
                <a @click="logOut()">LogOut</a>
            </li>
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
li a{
    text-decoration: underline;
}
</style>