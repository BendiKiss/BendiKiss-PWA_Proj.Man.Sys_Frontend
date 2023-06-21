<template>
  
  <div class="project-list">
    <h1 class="project-list-title">List of projects</h1>
    <form class="new-project">
      <div class="form-group">
        <h3>Create a new project here</h3>
        <label for="name">Project Name: </label>
        <input type="text" id="name" class="project-input" placeholder="Project name" v-model="pState.newpName">
      </div>
      <div class="form-group">
        <label for="description">Description: </label>
        <input type="text" id="description" class="project-input" placeholder="Description" v-model="pState.newDescription">
      </div>
      <div class="form-group">
        <label for="deadline">Deadline: </label>
        <input type="text" id="deadline" class="project-input" placeholder="Deadline" v-model="pState.newDeadline">
      </div>
      <button type="button" class="new-project-btn" @click="newProject()">New Project</button>
    </form>
    <div v-for="proj in pState.project" :key="proj._id" class="project-item">
      <router-link :to="`/project/${proj._id}`" class="project-link">
        <h4 class="project-name">{{ proj.name }}</h4>
        <p>{{ proj.description }}</p>
        <p class="project-deadline">{{ proj.deadline }}</p>
      </router-link>
      <button class="delete-btn" @click="deleteProject(proj._id)">Delete</button>
    </div>
  </div>
  <div class="gradient"></div>
</template>

<script>
import project from '../modules/project'
import { onMounted } from "vue"

export default {
  setup() {
    const { pState, getAllProjects, newProject, editProject, deleteProject, getSpecificProject } = project()

    onMounted(async () => {
      await getAllProjects()
    })

    return {
      pState,
      getAllProjects,
      newProject,
      editProject,
      deleteProject,
      getSpecificProject
    }
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
  font-family: 'Trebuchet MS', 'Lucida Sans', Arial, sans-serif;

}

.new-project{
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.project-input {
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.new-project-btn {
  background-color: #ff8c00;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.new-project-btn:hover {
  background-color: #ff6600;
}

.project-item {
  background-color: #f5f5f5;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
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
  font-family: 'Trebuchet MS', 'Lucida Sans', Arial, sans-serif;
}

.project-description {
  margin-bottom: 10px;
}

.project-deadline {
  margin-bottom: 15px;
}
.delete-btn {
  background-color: #ff8c00;
  color: #fff;
  border-radius: 10px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.delete-btn:hover {
  background-color: #ff6600;
}

@media screen and (max-width: 600px) {
  .project-list-title {
    font-size: 24px;
  }

  .new-project-btn {
    font-size: 16px;
  }

  .project-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .edit-btn,
  .delete-btn {
    font-size: 14px;
    padding: 3px 6px;
  }
}
.gradient{
  background: linear-gradient(to top, #ff8c00, #ffffff);
  height: 50vh;
}
</style>
