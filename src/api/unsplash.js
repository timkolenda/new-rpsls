import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 630c588d9c659156e3aeb6db866809578dadb2520e92e3eaaa7d6c58a069053a'
    }
});