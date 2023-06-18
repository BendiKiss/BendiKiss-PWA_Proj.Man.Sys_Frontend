import { reactive } from "vue";
import { useRouter } from "vue-router";

const getUser = () => {

    const router = useRouter();

    const uState = reactive({
        name: '',
        username: '',
        email: '',
        password: '',
        users: {}
    })

    const getAllUsers = async () => {
        try{
            // swagger online link - https://pwa-backend-mg85.onrender.com/api/
            await fetch("https://pwa-backend-mg85.onrender.com/api/user", {method: 'GET'})
            //await fetch("http://localhost:2000/api/user", {method: 'GET'})
            .then(res => res.json())
            .then(data => {
                uState.value.users = data
            })
        }
        catch(error) {
            console.log(error)
        }
    }

    const newUser = () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: uState.value.newuName,
                username: uState.value.newUsername,
                email: uState.value.newEmail,
                password: uState.value.newPassword
            })
        }            
        fetch("https://pwa-backend-mg85.onrender.com/api/user/new", requestOptions) 
        //fetch("http://localhost:2000/api/user/new", requestOptions) 
        .then(res => res.json())
        .then(data => {
            if (data.message){ // printing message to user
                alert(data.message);
            } else {
                router.push('/login'); //sending user to login if user got created
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    let loginUser = async () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            email: uState.email,
            password: uState.password
            })
        };
        await fetch("https://pwa-backend-mg85.onrender.com/api/user/login", requestOptions)
        //await fetch("http://localhost:2000/api/user/login", requestOptions)
        .then(res => res.json())
        .then(data => { 
           
            //console.log('data', data.token)
            //storing the data locally in the browser
            localStorage.setItem("auth-token", data.data.token),
            localStorage.setItem("userID", data.data.id),
            localStorage.setItem("username", data.data.username),
            localStorage.setItem("email", data.data.email),
            localStorage.setItem("userType", data.data.userType)
        }) 
        .then(router.push('/' + localStorage.getItem("userID"))) // almost certain this is issue when log in, yeessshs
        .catch(error => {
            console.log(error.message)
        });
    }

    const logOut = () => {
        localStorage.clear();
        //router.push("/login");
        window.location="/login"
    }
 return {
            uState,
            getAllUsers,
            newUser,
            loginUser,
            logOut
    }
 }
   


export default getUser