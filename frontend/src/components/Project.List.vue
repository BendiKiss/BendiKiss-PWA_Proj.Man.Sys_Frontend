<template>
    <div class="list-body">
        <h2>Projects</h2>
        <div class="folder-body">
            <ul class="newlist">
                <li>
                    <RouterLink to="/createproject">
                        <img src="" alt="">
                        <h3>Create project</h3>
                    </RouterLink>
                </li>
            </ul>
            <ul class="project-grid">
                <li v-for="project in pState.projects" :key="project._id">
                    <RouterLink :to="`/project/${project._id}`">
                        <img src="" alt="">
                        <h3>{{ project.title }}</h3>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import project from '../modules/project';
import { onMounted } from 'vue';

const { pState, getAllProjects} = project()

onMounted(() => {
    getAllProjects()
})
</script>
