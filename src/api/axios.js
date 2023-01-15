import axios from 'axios';

export default axios.create({
    baseURL: 'https://streetlight-api.onrender.com'
    //baseURL: 'http://localhost:5000'
    
});