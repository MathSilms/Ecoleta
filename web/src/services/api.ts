import axios from 'axios';


// application hosting
const api = axios.create({
    baseURL:'http://localhost:8080/'

})

export default api;