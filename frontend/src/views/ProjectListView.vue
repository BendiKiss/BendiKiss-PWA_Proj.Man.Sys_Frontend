<template>
    <h1>This is a Project List page</h1>

    <div v-for="item in pState.projects" :key="item.id">
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
</template>

<script>
import project from '../modules/project'
import { onMounted } from "vue"

  export default{
 
    setup () {
      
      const { pState, GetAllProjects, newProject } = project()

      onMounted(() => {
        GetAllProjects
      })

      return { pState, GetAllProjects, newProject}

    }
  }
</script>

<style lang="scss" scoped>

</style>