<template>
    <nav class="nav-container">
        <div class="nav-menu">
            <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/projects" class="nav-link">Projects</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/tasks" class="nav-link">Tasks</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/profile" class="nav-link">Profile</router-link>
            </li>
            <li class="nav-item">
               <a @click="logOut()" class="nav-link">Logout</a>
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
.nav-container {
  background-color: #c36b00;
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: large;
}

.nav-menu {
  display: flex;
  list-style: none;
  padding: 0;
}

.nav-item {
  margin: 0 30px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffcc00;
 text-decoration: underline;
}
</style>