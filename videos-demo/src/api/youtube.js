import axios from "axios";
const KEY = "AIzaSyBCC6J3ycr4VqwAFXTeUytfG7VsEcEAU4A";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});