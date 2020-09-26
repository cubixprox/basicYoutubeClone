import axios from 'axios'

// const KEY = "AIzaSyAeDruMhjQGB2noQeW_0lE_iCd856ds3rw";
 const KEY = "AIzaSyAWWrshEL9MCpfKgiNGXmRzsh7nIETmELc"


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResult: 5,
        type: 'video',
        key: KEY
    }
})