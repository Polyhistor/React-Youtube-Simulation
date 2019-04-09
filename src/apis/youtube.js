import Axios from 'axios'

const KEY = 'AIzaSyAuSpf18xJW0z-n6DldzF5W3FS_ipNQNeU'


export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY 
    }
})
