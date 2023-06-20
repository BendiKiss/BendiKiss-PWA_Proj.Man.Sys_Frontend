<template>
  <div>
      <h1>This is the edit project page!</h1>
  </div>
  <input label="name" type="text" placeholder="Task name" v-model="tState.newtName">
    <!-- <span> Test: {{ tState.newtName }} </span> -->
    <br>
    <input label="description" type="text" placeholder="Description" v-model="tState.newtDescription">
 <!--  <span> Test: {{ pState.newDescription }} </span> -->
  <br>
  <button @click="editTask()">Update project</button>


</template>

<script>
import taskFunctions from '../modules/task'

  export default {
      setup() {

          const { editTask, tState, getSpecificTask, task, taskId } = taskFunctions()

          getSpecificTask()
          
          return {
              tState,
              task,
              taskId,
              editTask,
              getSpecificTask
          }
      }
  }
</script>

<style lang="scss">

</style>