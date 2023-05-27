import axios from 'axios'

const api = axios.create({
    baseURL: "https://backend-project-fullstack.onrender.com/",
    timeout: 7000,
})

export { api }