<template>
  <div class="new-task">
    <h1>Tasks creator page</h1>
    <br>
      <input label="name" type="text" placeholder="Task name" v-model="tState.newtName">
    <br>
      <input label="description" type="text" placeholder="Description" v-model="tState.newtDescription">
    <br>
    <div class="form-group">
      <input type="text" placeholder="Deadline" v-model="tState.newtDeadline">
    </div>
    <select v-model="tState.projectId">
      <option v-for="project in pState.project" :key="project._id" :value="project._id">{{ project.name }}</option>
    </select>
    <br>
      <button @click="newTask()">New task</button>
    </div>
  <div class="gradient"></div>
</template>

<script>
import task from '../modules/task';
import project from '../modules/project'
import { onMounted } from 'vue';

export default {
  setup() {
    const { tState, getAllTasks, newTask, editTask, deleteTask, getSpecificTask } = task()
    const { pState, getAllProjects } = project()

    onMounted(async () => {
      await getAllTasks();
      await getAllProjects();
    });

    return { pState, tState, getAllTasks, getAllProjects, newTask, editTask, deleteTask, getSpecificTask }
  }
}
</script>

<style scoped>
.new-task {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.new-task h1 {
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans', Arial, sans-serif;
}

.new-task input[type="text"],
.new-task select {
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.new-task button {
  width: 20%;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #ff8c00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.new-task button:hover {
  background-color: #ff6600;
}

.gradient{
  background: linear-gradient(to top, #ff8c00, #ffffff);
  height: 50vh;
}

</style>