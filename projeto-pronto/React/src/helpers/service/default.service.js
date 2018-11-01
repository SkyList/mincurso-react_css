import axios from 'axios';

const api = axios.create({
    baseURL: 'https://randomuser.me/api/?results=10'
})

export const getAll = () => api.get()

const DefaultService = {
    getAll: getAll
}

export default DefaultService