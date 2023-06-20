<template>
  <div class="project-list">
    <h1 class="project-list-title">Project List</h1>
    <br>
    <input label="name" type="text" class="project-input" placeholder="Project Name" v-model="pState.newpName">
    <br>
    <input label="description" type="text" class="project-input" placeholder="Description" v-model="pState.newDescription">
    <br>
    <button class="new-project-btn" @click="newProject()">New Project</button>

    <div v-for="proj in pState.project" v-bind:key="proj._id" class="project-item">
      <router-link :to="`/project/${proj._id}`" class="project-link">
        <h4 class="project-name">{{ proj.name }}</h4>
        <p class="project-description">{{ proj.description }}</p>
        <button class="edit-btn" @click="getSpecificProject(proj._id)">Edit</button>
      </router-link>

      <button class="delete-btn" @click="deleteProject(proj._id)">Delete</button>
    </div>
  </div>
  <div class="gradient"></div>
</template>

<script> 

import project from '../modules/project'
import { onMounted } from "vue"

  export default{
 
    setup() {
      const { pState, getAllProjects, newProject, editProject, deleteProject, getSpecificProject} = project()

      onMounted( async() => {
        await getAllProjects()
      })

      return { pState, getAllProjects, newProject, editProject, deleteProject, getSpecificProject}
    }
    
  }

</script>

<style scoped>
.project-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  
}

.project-list-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
}

.project-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.new-project-btn {
  background-color: #ff8c00;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.new-project-btn:hover {
  background-color: #ff6600;
}

.project-item {
  background-color: #f5f5f5;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-link {
  text-decoration: none;
  color: #333;
}

.project-name {
  font-size: 20px;
  margin-bottom: 5px;
}

.project-description {
  margin-bottom: 10px;
}

.edit-btn,
.delete-btn {
  background-color: #ff8c00;
  color: #fff;
  border-radius: 10px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.edit-btn:hover,
.delete-btn:hover {
  background-color: #ff6600;
}

@media screen and (max-width: 600px) {
  .project-list-title {
    font-size: 24px;
  }

  .new-project-btn {
    font-size: 14px;
  }

  .project-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .edit-btn,
  .delete-btn {
    font-size: 12px;
    padding: 3px 6px;
  }
}
.gradient{
  background: linear-gradient(to top, #ff8c00, #ffffff);
  height: 50vh;
}
</style>