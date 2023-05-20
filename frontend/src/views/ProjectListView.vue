<template>
  <div>
    <h1>This is a Project List page</h1>

    <div v-for="item in pState.projects" :key="item._id">
      
      <h4>
        {{ item.name }}
      </h4>
      <p>
        {{ item.description }}
      </p>
      <button @click="editProject(project._id)">Edit</button>
      <button @click="deleteProject(project._id)">Delete</button>
    </div>
    <button @click="newProject()">New project - static</button>
    <br>
    <p>{{ pState }}</p>
  </div>
</template>

<script>
/*
import { reactive, onMounted } from 'vue'

  export default{
    setup() {
      const pState = reactive({
        projects: {}
      })

      function GetAll(){
        fetch("http://localhost:2000/api/project")
        .then(res => res.json())
        .then(data => {
          pState.projects = data
        })
      }
      onMounted(() => {
        GetAll()
      })
      return { pState, GetAll}
    }
  }
*/

import project from '../modules/project'
import { onMounted } from "vue"

  export default{
 
    setup () {
      
      const { pState, GetAllProjects, newProject, editProject, deleteProject } = project()

      onMounted(() => {
        GetAllProjects
      })

      return { pState, GetAllProjects, newProject, editProject, deleteProject}

    }
  }

</script>

<style lang="scss" scoped>

</style>