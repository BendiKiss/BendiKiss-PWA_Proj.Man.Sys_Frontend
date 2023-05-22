

import { /* ref, */ reactive, computed } from 'vue'
import { useRoute , useRouter } from 'vue-router'
 
const getProjects = () => {

    const route = useRoute();
    const router = useRouter();

    const projectId = computed(() => route.params.id)
    console.log("projectId: ", projectId)

    const pState = reactive({
        newpName: '',
        newDescription: '',
        project: {}
    });

/*
const getTodos = () => {

  const route = useRoute();
  const router = useRouter();

  const todoId = computed(() => route.params.id)
  //console.log("todoId: ", todoId)
 
  const state = ref({
    newAuthor: '',
    newTodoItem: '',
    todos: {}
  })
 */


  const getAllProjects = async () => {
    try{
        // online swagger link here 
        await fetch("http://localhost:2000/api/project", {method: 'GET'})
          .then(res => res.json())
          .then(data =>{
            pState.value.project = data
        })
    }
    catch(error) {
        console.log(error)
    }
}
/* 
  const GetAllTodos = async () => {
    try {
       await fetch("http://localhost:2000/api/project", {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        pState.project = data
        // debugger
      })
    }
    catch(error) {
      console.log(error) // do different error to showcase - line 15 wrong name + line13 with incorrect path
    }
  }
   */
  const newProject = () => {
    const requestOptions = {
        method: "POST",
        header: {
            "Content-Type": "applocation/json"
            //"auth-token": pState.token.
        },
        body: JSON.stringify({
            name: pState.value.newpName,
            descrioption: pState.value.newDescription
        })
    }
    fetch("http://localhost:2000/project/new", requestOptions) 
    .then(getAllProjects)
}

/* 
  const newTodo = () => { 
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // "auth-token": state.token
      },
      body: JSON.stringify({
        author: state.value.newAuthor,
        todo: state.value.newTodoItem
      }) 
    }
      fetch("http://localhost:3000/todos/new", 
      requestOptions
    ).then(GetAllProjects())
  }
  */ 

  const deleteProject = (_id) => {

    fetch("http://localhost:2000/project/delete/" + _id , { method: "DELETE"})
    .then(getAllProjects)
}

/* 
  const deleteTodo = (_id) => {
    fetch("http://localhost:3000/todos/delete/" + _id, { method: "DELETE"})
      .then(GetAllProjects())
  }
 */

  const editProject = () => {
    const requestOptions = {
        method: "PUT",
        header: {
            "Content-Type": "applocation/json"
            //"auth-token": pState.token.
        },
        body: JSON.stringify({
            name: pState.value.newpName,
            descrioption: pState.value.newDescription
        })
    } 
    fetch("http://localhost:2000/project/update/" + projectId.value, requestOptions)
    .then(res => res.body)
    .then(res => {console.log(res)})
    router.push('/project')
};

/*   
  const editTodo = () => { 
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
        // "auth-token": state.token
      },
      body: JSON.stringify({
        author: state.value.newAuthor,
        todo: state.value.newTodoItem
      }) 
    }
    fetch("http://localhost:3000/todos/update/" + todoId.value, 
    requestOptions)
     // .then(GetAllTodos())
      .then(res =>  res.body ) // redundant
      .then(res => {console.log(res)}) // redundant
      router.push('/todos')
  }
 */

  const project = reactive({})
  const getSpecificProject = async () => {
      try{
          fetch("http://localhost:2000/project")
          .then(res => res.json())
          .then(data => {
              project.value = data.filter(p => p._id ===projectId.value)
          })    
      }
      catch(error){
          console.log(error)
      }
  }

/* 
  const todo = ref({})
  const GetSpecificTodo = async () => {
    try {
      fetch("http://localhost:3000/todos")
        .then(res =>  res.json() ) 
        .then(data => {
            todo.value = data.filter(t => t._id === todoId.value)
        })
    }
    catch(error) {
      console.log(error)
    }
  }
 */

  return {
/*     
    todo,
    todoId,
    GetSpecificTodo,
    state,
    pState,
    newTodo,
    deleteTodo,
    editTodo,
 */
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



/* import { computed, reactive } from "vue"
import { useRoute, useRouter } from "vue-router"

const getProjects = () => {

    const route = useRoute();
    const router = useRouter();

    const projectId = computed(() => route.params.id)
    console.log("projectId: ", projectId)

    const pState = reactive({
        newpName: '',
        newDescription: '',
        project: {}
    });


    const GetAllTodos = async () => {
        try {
           await fetch("http://localhost:2000/api/project", {method: 'GET'})
          .then(res => res.json())
          .then(data => {
            pState.project = data
            // debugger
          })
        }
        catch(error) {
          console.log(error) // do different error to showcase - line 15 wrong name + line13 with incorrect path
        }
      }


    const GetAllProjects = async () => {
        try{

            // online swagger link here 
            await fetch("http://localhost:2000/api/project", {method: 'GET'})
              .then(res => res.json())
              .then(data =>{
                pState.project = data
              })
            
        }
        catch(error) {
            console.log(error)
        }
    }

    const newProject = () => {
        const requestOptions = {
            method: "POST",
            header: {
                "Content-Type": "applocation/json"
                //"auth-token": pState.token.
            },
            body: JSON.stringify({
                name: pState.value.newpName,
                descrioption: pState.value.newDescription
            })
        }
        fetch("http://localhost:2000/project/new", requestOptions) 
        .then(GetAllProjects)
    }

    const editProject = () => {
        const requestOptions = {
            method: "PUT",
            header: {
                "Content-Type": "applocation/json"
                //"auth-token": pState.token.
            },
            body: JSON.stringify({
                name: pState.value.newpName,
                descrioption: pState.value.newDescription
            })
        } 
        fetch("http://localhost:2000/project/update/" + projectId.value, requestOptions)
        .then(res => res.body)
        .then(res => {console.log(res)})
        router.push('/project')
    };

    const deleteProject = (_id) => {

        fetch("http://localhost:2000/project/delete/" + _id , { method: "DELETE"})
        .then(GetAllProjects)
    }

    const project = reactive({})
    const getSpecificProject = async () => {
        try{
            fetch("http://localhost:2000/project")
            .then(res => res.json())
            .then(data => {
                project.value = data.filter(p => p._id ===projectId.value)
            })    
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        pState, 
        project,
        projectId,
        GetAllProjects, 
        newProject, 
        deleteProject,
        editProject,
        getSpecificProject,
        GetAllTodos
    )
}

export default getProjects

 */