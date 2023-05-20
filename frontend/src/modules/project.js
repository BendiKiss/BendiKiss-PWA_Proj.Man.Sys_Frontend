import { reactive } from "vue"

const getProjects = () => {

    const pState = reactive({
        projects: {}
    });

    const GetAllProjects = async () => {
        try{

            // online swagger link here
            await fetch("http://localhost:2000/projects")
              .then(res => res.json())
              .then(data =>{
                pState.projects = data
              })
            
        }
        catch(error) {
            console.log(error)
        }
    }

    const newProject = () => {
        fetch("http://localhost:2000/projects/new", { method: "POST"}) 
      }

    const editProject = (_id) => {
        const requestOptions = {
            method: "PUT"
        } 
        fetch("http://localhost:2000/projects/update/" + _id, requestOptions)
        .then(res => res.body)
        .then(res => {console.log(res)})
    };

    const deleteProject = (_id) => {

        fetch("http://localhost:2000/projects/delete/" + _id , { method: "DELETE"})
        .then(() => {})
    }




    return ( pState, 
            GetAllProjects, 
            newProject, 
            deleteProject,
            editProject )
}

export default getProjects