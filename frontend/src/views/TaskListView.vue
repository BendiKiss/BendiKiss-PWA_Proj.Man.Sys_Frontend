<template>
  <div>
    <h1>This is a Tasks list page</h1>
    <br>
    <input label="name" type="text" placeholder="Task name" v-model="tState.newtName">
    <!-- <span> Test: {{ tState.newtName }} </span> -->
    <br>
    <input label="description" type="text" placeholder="Description" v-model="tState.newtDescription">
    <!-- <span> Test: {{ tState.newtDescription }} </span> -->    
    <br>
    <select v-model="tState.projectId">
      <option v-for="project in pState.project" :key="project._id" :value="project._id">{{ project.name }}</option>
    </select>
    
    <br>
    <button @click="newTask('/project')">New task</button>

    <div v-for="task in tState.task"  v-bind:key="task._id">
      <router-link :to="`/task/${task._id}`">
        <h4>
          {{ task.name }}
        </h4>
        <p>
          {{ task.description }}
        </p>
        <p>
          {{ task.projectId }}
        </p>
        <button @click="getSpecificTask(task._id)">Edit</button>
      </router-link>

      <button @click="deleteTask(task._id)">Delete</button>     
    </div>
    <br>
    
   <!--  <p>{{ tState }}</p> -->


  </div>
</template>

<script>
import task from '../modules/task';
import project from '../modules/project'
import { onMounted } from 'vue';

  export default{

    setup() {
      const { tState, getAllTasks,  newTask, editTask, deleteTask, getSpecificTask } = task ()
      const { pState, getAllProjects } = project ()

      onMounted(async () => {
        await getAllTasks();
        await getAllProjects();
      });

      return { pState, tState, getAllTasks, getAllProjects, newTask, editTask, deleteTask, getSpecificTask }
    }
  }

</script>
