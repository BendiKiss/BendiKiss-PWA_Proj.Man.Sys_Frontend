<template>
  <div class="project">
    <h1>This is a project page</h1>

    <div v-for="proj in pState.project" v-bind:key="proj._id">
        <h4>
          {{ proj.name }}
        </h4>
        <p>
          {{ proj.description }}
        </p>
        <button @click="editProject(proj._id)">Edit</button>

      <button @click="deleteProject(proj._id)">Delete</button>     
    </div>

  </div>
</template>

<script>

import project from '../modules/project'
import { onMounted } from "vue"

  export default{
 
    setup() {
      const { pState, getSpecificProject, editProject, deleteProject } = project()

      onMounted( async() => {
        await getSpecificProject()
      })

      return { pState, getSpecificProject, editProject, deleteProject}
    }
    
  }


</script>
