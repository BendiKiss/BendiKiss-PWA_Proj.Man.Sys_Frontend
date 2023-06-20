<template>
  <div>
    <h1>This is a Tasks list page</h1>
    <br>
    <input type="text" placeholder="Task name" v-model="tState.newtName">
    <!-- <span> Test: {{ tState.newtName }} </span> -->
    <br>
    <input type="text" placeholder="Description" v-model="tState.newtDescription">
    <!-- <span> Test: {{ tState.newtDescription }} </span> -->    
    <br>
    <button @click="newTask()">New task</button>

    <div v-for="task in tState.task" :key="task._id">
      <router-link :to="`/task/${task._id}`">
        <h4>
          {{ task.name }}
        </h4>
        <p>
          {{ task.description }}
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
import task from '../modules/task'
import { onMounted } from 'vue';

  export default{

    setup() {
      const { tState, getAllTasks, newTask, editTask, deleteTask, getSpecificTask } = task ()

      onMounted( async() => {
        await getAllTasks
      })

      return { tState, getAllTasks, newTask, editTask, deleteTask, getSpecificTask }
    }
  }

</script>
