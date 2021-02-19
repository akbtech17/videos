import axios from 'axios';

const KEY = "AIzaSyD4BBuQhamwZI7ahj1RRuUTYc9N48I7qi0";

//pre-configured axios instance, with base url
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        type:'video',
        maxResults:5,
        key:KEY
    }
});