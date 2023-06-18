

import { ref, reactive, computed } from 'vue'
import { useRoute , useRouter } from 'vue-router'
 
const getProjects = () => {

    const route = useRoute();
    const router = useRouter();

    const projectId = computed(() => route.params.id)
    console.log("projectId: ", projectId)

    const pState = ref({
        newpName: '',
        newDescription: '',
        project: {}
    });

  const getAllProjects = async () => {
    try{

        // online swagger link here - https://pwa-backend-mg85.onrender.com/api/
        //await fetch("https://pwa-backend-mg85.onrender.com/api/project", {method: 'GET'})
        // local link
        await fetch("http://localhost:2000/api/project", {method: 'GET'})
          .then(res => res.json())
          .then(data =>{
            pState.value.project = data
        })
    }
    catch(error) {
        console.log(error)
    }
  };

  const newProject = () => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            //"auth-token": pState.token.
        },
        body: JSON.stringify({
            name:  pState.value.newpName,
            description: pState.value.newDescription
        })
    }
    //fetch("https://pwa-backend-mg85.onrender.com/api/project/new", requestOptions)
     fetch("http://localhost:2000/api/project/new", requestOptions) 
    .then(getAllProjects)
  }; 

  const deleteProject = (_id) => {

    //fetch("https://pwa-backend-mg85.onrender.com/api/project/delete/" + _id , { method: "DELETE"})
     fetch("http://localhost:2000/api/project/delete/" + _id , { method: "DELETE"})
    .then(getAllProjects)
  };

  const editProject = () => {
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "applocation/json"
            //"auth-token": pState.token.
        },
        body: JSON.stringify({
            name: pState.value.newpName,
            descrioption: pState.value.newDescription
        })
    }
    //fetch("https://pwa-backend-mg85.onrender.com/api/project/update/" + projectId.value, requestOptions)
    fetch("http://localhost:2000/api/project/update/" + projectId.value, requestOptions)
    .then(res => res.body)
    .then(res => {console.log(res)})
    router.push('/project')
  };

  const project = reactive({})
  const getSpecificProject = async () => {
    
      try{
         // fetch("https://pwa-backend-mg85.onrender.com/api/project")
        fetch("http://localhost:2000/api/project")
          .then(res => res.json())
          .then(data => {
              project.value = data.filter(p => p._id ===projectId.value)
          })    
      }
      catch(error){
          console.log(error)
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

