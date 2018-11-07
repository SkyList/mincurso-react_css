import axios from 'axios';
import { defaultValueResults } from '../constants'

const api = axios.create({
    baseURL: 'https://randomuser.me/api/'
})

export const getContactsAll = (number) => api.get(`?results=${number || 10}`)
export const getContactsFilteredByGender = (gender, number) => api.get(`?gender=${gender}&results=${number || 10}`)
export const getContactsFilteredByNationalite = (nationality, number) => api.get(`?nat=${nationality}&results=${number || 10}`)
export const getFiltered = (fields) => api.get(`?inc=${fields}`)

const DefaultService = {
    getFiltered: getFiltered,
    getContactsAll: getContactsAll,
    getContactsFilteredByGender: getContactsFilteredByGender,
    getContactsFilteredByNationalite: getContactsFilteredByNationalite
}

export default DefaultService