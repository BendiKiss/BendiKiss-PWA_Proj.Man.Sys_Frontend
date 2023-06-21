<template>
  <nav class="nav-container">
      <ul class="nav-menu">
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
             <a @click="logOut()" class="nav-link logout-link">Logout</a>
          </li>
      </ul>        
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
background-color: #3f51b5;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
height: 60px;
border-radius: 20px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.nav-menu {
font-family: 'Trebuchet MS', 'Lucida Sans', Arial, sans-serif;
display: flex;
list-style: none;
padding: 0;
margin: 0;
}

.nav-item {
margin: 0 20px;
}

.nav-link {
color: #fff;
text-decoration: none;
font-size: 18px;
padding: 12px 20px;
transition: color 0.3s ease;
}

.nav-link:hover {
color: #ffcc00;
text-decoration: underline;
}

.logout-link {
cursor: pointer;
}
</style>