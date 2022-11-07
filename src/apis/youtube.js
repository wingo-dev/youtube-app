import axios from 'axios';

const KEY = 'youtbue api key';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 15,
        type: 'video',
        key: KEY,
    }
});
