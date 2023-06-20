<template>
    <div>
        <h1>This is the edit project page!</h1>
    </div>
    <input type="text" placeholder="Project name" v-model="pState.newpName">
    <!-- <span> Test: {{ pState.newpName }} </span> -->
    <br>
    <input type="text" placeholder="Description" v-model="pState.newDescription">
   <!--  <span> Test: {{ pState.newDescription }} </span> -->
    <br>
    <button @click="editProject()">Update project</button>


</template>

<script>
import projectFunctions from '../modules/project'

    export default {
        setup() {

            const { editProject, pState, getSpecificProject, project, projectId } = projectFunctions()

            getSpecificProject()
            
            return {
                pState,
                project,
                projectId,
                editProject,
                getSpecificProject
            }
        }
    }
</script>

<style lang="scss">

</style>