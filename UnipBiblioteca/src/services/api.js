import axios from 'axios';

const api = axios.create({
    baseURL: 'https://library-control-system.herokuapp.com/api/v1/unip/biblioteca'
});

export default api;