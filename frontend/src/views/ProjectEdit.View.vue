<template>
  <div class="edit-project-container">
    <div class="project-editor">
      <h1 class="edit-project-title">Edit your project here!</h1>
      <div class="form-group">
        <input type="text" placeholder="Project name" v-model="pState.newpName">
      </div>
      <div class="form-group">
        <input type="text" placeholder="Description" v-model="pState.newDescription">
      </div>
      <div class="form-group">
        <input type="text" placeholder="Deadline" v-model="pState.newDeadline">
      </div>
      <button class="update-project-btn" @click="editProject()">Update project</button>
      <router-link :to="`/tasks`">
        <button class="add-task-btn">Add task</button>
      </router-link>
    </div>
    <h2 class="tasks-title">Tasks:</h2>
    <ul class="task-list">
      <li v-for="task in pState.tasks" :key="task._id" class="task-item">
        <router-link :to="`/task/${task._id}`" class="task-link">
          <h4 class="task-name">{{ task.name }}</h4>
          <p class="task-description">{{ task.description }}</p>
          <p class="task-id">{{ task.deadline }}</p>
        </router-link>
        <button class="delete-task-btn" @click="deleteTask(task._id)">Delete</button>
      </li>
    </ul>
  </div>
  <div class="gradient"></div>

</template>

<script>
import projectFunctions from '../modules/project';
import taskFunctions from '../modules/task';

export default {
  setup() {
    const { editProject, pState, getSpecificProject } = projectFunctions();
    const { deleteTask } = taskFunctions();

    getSpecificProject();

    return {
      pState,
      editProject,
      deleteTask
    };
  }
};
</script>

<style lang="scss" scoped>
.edit-project-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.project-editor{
  max-width: 800px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.edit-project-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans', Arial, sans-serif;
}

.form-group {
  margin-bottom: 10px;
}

input {
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.update-project-btn {
  background-color: #ff8c00;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-right: 20px;
}

.update-project-btn:hover {
  background-color: #ff6600;
}

.tasks-title {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans', Arial, sans-serif;
}

.task-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}

.task-item {
  background-color: #f5f5f5;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-link {
  text-decoration: none;
  color: #333;
}

.task-name {
  font-size: 20px;
  margin-bottom: 5px;
}

.task-description {
  margin-bottom: 10px;
}

.task-id {
  font-size: 12px;
  color: #666;
}

.delete-task-btn {
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

.delete-task-btn:hover {
  background-color: #ff6600;
}

.add-task-btn {
  background-color: #ff8c00;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
}

.add-task-btn:hover {
  background-color: #ff6600;
}

.gradient{
  background: linear-gradient(to top, #ff8c00, #ffffff);
  height: 50vh;
}

</style>
