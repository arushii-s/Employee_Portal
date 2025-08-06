import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.51:7105', // replace with your ASP.NET IP
});

export default api;
