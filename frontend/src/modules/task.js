import { computed } from 'vue'
import { useRoute , useRouter } from 'vue-router'
import { reactive } from 'vue/dist/vue.esm-bundler'
 
const getTasks = () => {

    const route = useRoute();
    const router = useRouter();

    const taskId = computed(() => route.params.id)
    console.log("taskId: ", taskId)

    const tState = reactive({
        newtName: '',
        newtDescription: '',
        task: [],
        projectId: ''
      });

      const getAllTasks = async () => {
        try {
          await fetch("https://pwa-backend-mg85.onrender.com/api/task", { method: 'GET' })
            .then(res => res.json())
            .then(data => {
              tState.task = data;
            });
        } catch (error) {
          console.log(error);
        }
      };

      const newTask = () => {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: tState.newtName,
            description: tState.newtDescription,
            projectId: tState.projectId
          })
        };
      
        fetch("https://pwa-backend-mg85.onrender.com/api/task/new/", requestOptions)
          .then(getAllTasks);
      };
    

    const deleteTask = (_id) => {
        fetch("https://pwa-backend-mg85.onrender.com/api/task/delete/" + _id , { method: "DELETE" })
        .then(getAllTasks)
      };

    const editTask = () => {
        const requestOptions = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: tState.newtName,
            description: tState.newtDescription,
          })
        };
        fetch('https://pwa-backend-mg85.onrender.com/api/task/update/' + taskId.value, requestOptions)
          .then(res => res.body)
          .then(res => { console.log(res); });
        router.push('/task');
    };

    const task = reactive({})
    const getSpecificTask = async () => {
        try{
            fetch("https://pwa-backend-mg85.onrender.com/api/task")
            //fetch("http://localhost:2000/api/task")
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
  
    
    
    

