<template>
  <div>
    <h1>This is a Project List page</h1>
    <button @click="newProject()">New project</button>
    <br>
    <input type="text" placeholder="Project name" v-model="pState.newpName">
    <span> Test: {{ pState.newpName }} </span>
    <br>
    <input type="text" placeholder="Description" v-model="pState.newDescription">
    <span> Test: {{ pState.newDescription }} </span>

    <br>

    <div v-for="project in pState.projects" :key="project._id">
      <router-link :to="`/project/${project._id}`">
        <h4>
          {{ project.name }}
        </h4>
        <p>
          {{ project.description }}
        </p>
        <button @click="editProject(project._id)">Edit</button>
      </router-link>

      <button @click="deleteProject(project._id)">Delete</button>
    </div>
    <br>
    <p>{{ pState }}</p>

  </div>
</template>

<script setup>

import {  onMounted } from 'vue'

import project from '../modules/project'

      const { pState, getAllProjects, newProject, editProject, deleteProject } = project()

      onMounted(() => {
      getAllProjects()
      })

/* 
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
  } */

  /*

  ^ "setup" into the script tag
  |
  import project from '../modules/project'
  import { onMounted, ref } from "vue"

  const pState = ref({
    newpName: '',
    newDescription: '',
    projects: []
  })

  const { pState, GetAllProjects, newProject, editProject, deleteProject } = project()

  onMounted(() => {
    GetAllProjects()
  })
*/

/*
import project from '../modules/project'
import { onMounted } from "vue"

  export default{
 
    setup() {
      const { pState, GetAllProjects, newProject, editProject, deleteProject } = project()

      onMounted( async() => {
        await GetAllProjects()
      })

      return { pState, GetAllProjects, newProject, editProject, deleteProject}
    }
    
  }
*/
</script>

<style lang="scss" scoped>

</style>