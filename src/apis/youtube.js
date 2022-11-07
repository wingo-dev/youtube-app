import axios from 'axios';

const KEY = 'AIzaSyAJpqck9YuPlnrTX8Dss4HvWo51Kata82A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 15,
        type: 'video',
        key: KEY,
    }
});