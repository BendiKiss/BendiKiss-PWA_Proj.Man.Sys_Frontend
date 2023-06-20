<template>
    <div>
      <h1>This is the edit project page!</h1>
    </div>
    <input type="text" placeholder="Project name" v-model="pState.newpName">
    <!-- <span> Test: {{ pState.newpName }} </span> -->
    <br>
    <input type="text" placeholder="Description" v-model="pState.newDescription">
    <!-- <span> Test: {{ pState.newDescription }} </span> -->
    <br>
    <button @click="editProject()">Update project</button>
    <h2>Tasks:</h2>
    <ul>
      <li v-for="task in pState.tasks" :key="task._id">
        <router-link :to="`/task/${task._id}`">
          <h4>{{ task.name }}</h4>
          <p>{{ task.description }}</p>
          <p>{{ task._id }}</p>
        </router-link>
        <button @click="deleteTask(task._id)">Delete</button>
      </li>
    </ul>
    <router-link :to="`/tasks`">
      <button>Add task</button>
    </router-link>
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
  
  <style lang="scss"></style>
  