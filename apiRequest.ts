import axios from "axios";

const apiRequest = axios.create({
    baseURL: 'https://api.github.com'
  });


export default apiRequest