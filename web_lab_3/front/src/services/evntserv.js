import axios from 'axios';

const expressUrl = 'http://localhost:3000';

export default {
    use (){},
    getUser (email, password) {
        return axios.get(expressUrl + `/user?email=${email}&password=${password}`);
    },
    getSaveUser(email, password, username, sex) {
        return axios.get(expressUrl + `/save-user?email=${email}&password=${password}&username=${username}&sex=${sex}`);
    }
}