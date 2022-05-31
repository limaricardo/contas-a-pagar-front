import axios from 'axios'

export default axios.create({
    baseURL: 'https://lucrorural-dev-backend.herokuapp.com/'
})