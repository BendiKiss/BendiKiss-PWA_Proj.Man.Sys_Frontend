<template>
  <div>

    <h1>This is a Project List page</h1>
    <br>
    <input label="name" type="text" placeholder="Project name" v-model="pState.newpName">
    <span> Test: {{ pState.newpName }} </span>
    <br>
    <input label="description" type="text" placeholder="Description" v-model="pState.newDescription">
    <span> Test: {{ pState.newDescription }} </span>
    <br>
    <button @click="newProject()">New project</button>
    <div v-for="proj in pState.project" v-bind:key="proj._id">
      <router-link :to="`/project/${proj._id}`">
        <h4>
          {{ proj.name }}
        </h4>
        <p>
          {{ proj.description }}
        </p>
        <button @click="editProject(proj._id)">Edit</button>
      </router-link>

      <button @click="deleteProject(proj._id)">Delete</button>     
    </div>
    <br>
    <!-- <p>{{ pState }}</p> -->

  </div>
</template>

<script> 

/* 
  ^ "setup" into the script tag

import project from '../modules/project'
import {  onMounted, ref } from 'vue';
  
  const pState = ref({
    newpName: '',
    newDescription: '',
    projects: {}
  })
 
      
  const { pState, getAllProjects, newProject, editProject, deleteProject } = project()

      onMounted(() => {
      getAllProjects()
  })
 

      function GetAll(){
        fetch("http://localhost:2000/api/project")
        .then(res => res.json())
        .then(data => {
          pState.value.projects = data
        })
    
      onMounted(() => {
        GetAll()
      }) 

      return { pState, GetAll};
    }
*/


import project from '../modules/project'
import { onMounted } from "vue"

  export default{
 
    setup() {
      const { pState, getAllProjects, newProject, editProject, deleteProject } = project()

      onMounted( async() => {
        await getAllProjects()
      })

      return { pState, getAllProjects, newProject, editProject, deleteProject}
    }
    
  }

</script>

<style lang="scss" scoped>

</style>