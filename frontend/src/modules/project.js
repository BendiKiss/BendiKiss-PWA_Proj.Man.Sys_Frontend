import { reactive, computed } from 'vue'
import { useRoute , useRouter } from 'vue-router'
 
const getProjects = () => {

    const route = useRoute();
    const router = useRouter();

    const projectId = computed(() => route.params.id)
    console.log("projectId: ", projectId)

    const pState = reactive({
      newpName: '',
      newDescription: '',
      newDeadline: '',
      project: [],
      tasks: []
    });

    const getAllProjects = async () => {
      try {
        const response = await fetch('https://pwa-backend-mg85.onrender.com/api/project', { method: 'GET' });
        const data = await response.json();
        pState.project = data;
      } catch (error) {
        console.log(error);
      }
    };

    const newProject = () => {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: pState.newpName,
          description: pState.newDescription,
          deadline: pState.newDeadline
        })
      };
    
      fetch("https://pwa-backend-mg85.onrender.com/api/project/new", requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    };

  const deleteProject = (_id) => {
    fetch("https://pwa-backend-mg85.onrender.com/api/project/delete/" + _id , { method: "DELETE" })
    .then(getAllProjects)
  };

  const editProject = () => {
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
            //"auth-token": pState.token.
        },
        body: JSON.stringify({
            name: pState.newpName,
            description: pState.newDescription,
            deadline: pState.newDeadline
        })
    }
    fetch("https://pwa-backend-mg85.onrender.com/api/project/update/" + projectId.value, requestOptions)
    .then(res => res.body)
    .then(res => { console.log(res) })
    router.push('/projects')
  };

  const project = reactive({})

  const getProjectTasks = async () => {
    try {
      const response = await fetch(`https://pwa-backend-mg85.onrender.com/api/task/project/${projectId.value}`, { method: 'GET' });
      const data = await response.json();
      pState.tasks = data;
    } catch (error) {
      console.log(error);
    }
  };

  const getSpecificProject = async () => {
    try {
      fetch('https://pwa-backend-mg85.onrender.com/api/project/')
        .then(res => res.json())
        .then(data => {
          project.value = data.filter(p => p._id === projectId.value);
          getProjectTasks(); // Fetch associated tasks
        });
    } catch (error) {
      console.log(error);
    }
  };

  

  return {
    pState, 
    project,
    projectId,
    getAllProjects, 
    newProject, 
    deleteProject,
    editProject,
    getSpecificProject,
  }
}

export default getProjects
