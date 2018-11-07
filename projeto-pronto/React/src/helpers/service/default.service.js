import axios from 'axios';
import constants from '../constants';

const api = axios.create({
    baseURL: 'https://randomuser.me/api/'
})

export const getContactsAll = (number) => api.get(`?results=${number || constants.defaultValues.fetchValue}&nat=BR`)
export const getContactsFilteredByGender = (gender, number) => api.get(`?gender=${gender}&results=${number || constants.defaultValues.fetchValue}`)
export const getContactsFilteredByNationalite = (nationality, number) => api.get(`?nat=${nationality}&results=${number || constants.defaultValues.fetchValue}`)
export const getFiltered = (fields) => api.get(`?inc=${fields}`)

const DefaultService = {
    getFiltered: getFiltered,
    getContactsAll: getContactsAll,
    getContactsFilteredByGender: getContactsFilteredByGender,
    getContactsFilteredByNationalite: getContactsFilteredByNationalite
}

export default DefaultService