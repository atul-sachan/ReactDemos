import axios from 'axios';
 
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID vYLIhogduscsV04L25z4S7527Ak4hgRVBwTV9ke02rg'
    }
});