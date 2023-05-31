import axios from 'axios'

const api = axios.create({
    baseURL: "https://backend-project-fullstack.onrender.com/",
    timeout: 10000,
})

export { api }