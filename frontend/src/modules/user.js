import { reactive } from "vue";
import { useRouter } from "vue-router";

const getUser = () => {
    const router = useRouter();

    const uState = reactive({
        name: '',
        username: '',
        email: '',
        password: '',
        users: {},
        newuName: '',
        newUsername: '',
        newEmail: '',
        newPassword: ''
    });

    const getAllUsers = async () => {
        try {
            await fetch("https://pwa-backend-mg85.onrender.com/api/user", {
                method: 'GET',
                headers: {
                    Authorization: localStorage.getItem('Authorization')
                }
            })
                .then(res => res.json())
                .then(data => {
                    uState.users = data;
                });
        } catch (error) {
            console.log(error);
        }
    };

    const newUser = () => {
        if (!uState.newuName) {
            alert('Please enter a name.');
            return;
        }
    
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem('Authorization')
            },
            body: JSON.stringify({
                name: uState.newuName,
                username: uState.newUsername,
                email: uState.newEmail,
                password: uState.newPassword
            })
        };
        fetch("https://pwa-backend-mg85.onrender.com/api/user/register", requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);
                } else {
                    console.log(data)
                    router.push('/login');
                }
            })
            .catch(error => {
                console.log(error);
            });
    };    

    let loginUser = async () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: uState.email,
                password: uState.password,
                token: uState.token
            })
        };
        await fetch("https://pwa-backend-mg85.onrender.com/api/user/login", requestOptions)
            .then(res => res.json())
            .then(data => {
                router.push('/projects')
                if (data && data.data && data.data.token) {
                    localStorage.setItem('Authorization', data.data.token);
                    localStorage.setItem("userID", data.data.id);
                    localStorage.setItem("username", data.data.username);
                    localStorage.setItem("email", data.data.email);
                    localStorage.setItem("userType", data.data.userType);
                } else {
                    console.log(data);
                }
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const logOut = () => {
        localStorage.clear();
        window.location = "/login";
    };

    return {
        uState,
        getAllUsers,
        newUser,
        loginUser,
        logOut
    };
};

export default getUser;