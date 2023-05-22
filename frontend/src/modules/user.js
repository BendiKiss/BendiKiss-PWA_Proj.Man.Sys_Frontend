import { error } from "console";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const getUser = () => {

    const router = useRouter();

    const uState = reactive({
        name: '',
        username: '',
        email: '',
        password: ''
    })

    const newUser = () => {
        const requestOptions = {
            method: "POST",
            header: {
                "Content-Type": "applocation/json"
            },
            body: JSON.stringify({
                name: uState.value.newuName,
                username: uState.value.newUsername,
                email: uState.value.newEmail,
                password: uState.value.newPassword
            })
        }            
        fetch("http://localhost:2000/user/new", requestOptions) 
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
        });
    
    const loginUser = async () => {
        const requestOptions = {
            method: "POST",
            header: {
                "Content-Type": "applocation/json"
            },
            body: JSON.stringify({
            email: uState.value.newEmail,
            password: uState.value.newPassword
            })
        };
        await fetch("http://localhost:2000/user/new", requestOptions)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("auth-token", data.data.token),
            localStorage.setItem("userID", data.data.id),
            localStorage.setItem("username", data.data.username),
            localStorage.setItem("email", data.data.email),
            localStorage.setItem("userType", data.data.userType)
        }) 
        .then(router.push('/' + localStorage.getItem("userID")))
        .catch(error => {
            console.log(error)
        });
    }

    const logOut = () => {
        localStorage.clear();
        router.push("/login");
    }

    }
    return {
            uState,
            newUser,
            loginUser,
            logOut
    }
}

export default getUser