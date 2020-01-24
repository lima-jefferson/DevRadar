import axios from 'axios'

const api = axios.create({
    baseURL: 'https://devradarbackend10.herokuapp.com'
});

export default api