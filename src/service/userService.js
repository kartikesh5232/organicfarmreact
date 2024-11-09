

import axios from 'axios';

const API_URL = 'http://localhost:9001/auth/';


class UserService {



    async login(user) {
        try {

            const response = await axios.post(API_URL + 'login', JSON.stringify(user), {
                headers: { 'Content-Type': 'application/json; charset=UTF-8' }
            });

            localStorage.setItem('Token', JSON.stringify(response.data.token));
      
            return response.data;

        } catch (error) {
            console.error("Error during login:", error);
            throw error; // Re-throw the error so it can be handled by the calling function
        }
    }

    logOut() {
        // Log out functionality here
    }

    register() {
        // Register functionality here
    }

}

export default new UserService();