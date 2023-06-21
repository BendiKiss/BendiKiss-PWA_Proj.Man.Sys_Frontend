<template>
  <div class="edit-task-container">
    <h1 class="edit-task-title">Edit your task here!</h1>
    <div class="form-group">
      <input type="text" placeholder="Task name" v-model="tState.newtName">
    </div>
    <div class="form-group">
      <input type="text" placeholder="Description" v-model="tState.newtDescription">
    </div>
    <div class="form-group">
      <input type="text" placeholder="Deadline" v-model="tState.newtDeadline">
    </div>
    <br>
    <select v-model="tState.projectId">
      <option v-for="project in pState.project" :key="project._id" :value="project._id">{{ project.name }}</option>
    </select>
    <br>
    <button class="update-task-btn" @click="editTask()">Update task</button>
  </div>
  <div class="gradient"></div>

</template>

<script>
import taskFunctions from '../modules/task';
import project from '../modules/project';
import { onMounted } from 'vue';


export default {
  setup() {
    const { editTask, tState, getSpecificTask, task, taskId } = taskFunctions()
    const { pState, getAllProjects } = project()

     onMounted(async () => {
      await getSpecificTask();
      await getAllProjects();
    });

    return {
      tState,
      pState,
      task,
      taskId,
      editTask,
      getSpecificTask,
      getAllProjects
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-task-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.edit-task-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans', Arial, sans-serif;
}

.form-group {
  margin-bottom: 10px;
}

input,
select {
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.update-task-btn {
  background-color: #ff8c00;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.update-task-btn:hover {
  background-color: #ff6600;
}

.gradient{
  background: linear-gradient(to top, #ff8c00, #ffffff);
  height: 50vh;
}

</style>
