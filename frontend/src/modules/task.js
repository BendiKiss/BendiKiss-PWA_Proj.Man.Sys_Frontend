import { reactive, computed } from 'vue'
import { useRoute , useRouter } from 'vue-router'
 
const getTasks = () => {

    const route = useRoute();
    const router = useRouter();

    const taskId = computed(() => route.params.id)
    console.log("taskId: ", taskId)

    const tState = reactive({
        newtName: '',
        newtDescription: '',
        task: {}
    });

    const getAllTasks = async () => {
        try{
            // online swagger link here - https://pwa-backend-mg85.onrender.com/api/
            await fetch("http://localhost:2000/api/task", {method: 'GET'})
            .then(res => res.json())
            .then(data =>{
                tState.task = data
            })
        }
        catch(error) {
            console.log(error)
        }
    }

    const newTask = () => {
        const requestOptions = {
            method: "POST",
            header: {
                "Content-Type": "applocation/json"
                //"auth-token": pState.token.
            },
            body: JSON.stringify({
                name: tState.value.newtName,
                descrioption: tState.value.newtDescription
            })
        }
        fetch("http://localhost:2000/task/new", requestOptions) 
        .then(getAllTasks)
    };

    const deleteTask = (_id) => {

        fetch("http://localhost:2000/task/delete/" + _id , { method: "DELETE"})
        .then(getAllTasks)
    };

    const editTask = () => {
        const requestOptions = {
            method: "PUT",
            header: {
                "Content-Type": "applocation/json"
                //"auth-token": pState.token.
            },
            body: JSON.stringify({
                name: tState.value.newtName,
                descrioption: tState.value.newtDescription
            })
        } 
        fetch("http://localhost:2000/task/update/" + taskId.value, requestOptions)
        .then(res => res.body)
        .then(res => {console.log(res)})
        router.push('/task')
    };

    const task = reactive({})
    const getSpecificTask = async () => {
        try{
            fetch("http://localhost:2000/task")
            .then(res => res.json())
            .then(data => {
                task.value = data.filter(p => p._id ===taskId.value)
            })    
        }
        catch(error){
            console.log(error)
        }
    };

    return{
        task,
        taskId,
        tState,
        newTask,
        editTask,
        deleteTask,
        getAllTasks,
        getSpecificTask
    }
}

export default getTasks
  
    
    
    

