import axios from 'axios';

const AUTH_API = "http://localhost:9191/api/auth/login";

class AuthService {

    login(user) {
        return axios.post(AUTH_API, user);
    }

    saveUserLogin(token) {
        localStorage.setItem("logged", "true");
        if(token) {
            localStorage.setItem("token", token);
        }
    }

    logout() {
        localStorage.clear();
    }

    isUserLoggedIn() {
        let status = localStorage.getItem("logged");
        return status === "true";
    }
}

export default new AuthService();