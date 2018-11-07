import axios from 'axios';
import constants from '../constants';

//BUSCA CONTATOS NA API https://randomuser.me/
const api = axios.create({
    baseURL: 'https://randomuser.me/api/'
})

// #region CONSULTRAS NA API
//BUSCA CONTATOS NA API COM LIMITE DE 10 CONTATOS E FILTRADOS PELA NACIONALIDADE BRASILEIRA
export const getContactsAll = (number) => api.get(`?results=${number || constants.defaultValues.fetchValue}&nat=BR`)

//BUSCA CONTATOS NA API FILTRADOS POR GENERO
export const getContactsFilteredByGender = (gender, number) => api.get(`?gender=${gender}&results=${number || constants.defaultValues.fetchValue}`)

//BUSTA CONTATOS NA API FILTRADOS POR NACIONALIDADE
export const getContactsFilteredByNationalite = (nationality, number) => api.get(`?nat=${nationality}&results=${number || constants.defaultValues.fetchValue}`)

//BUSCA CONTATOS NA API COM UMA WHITELIST
export const getFiltered = (fields) => api.get(`?inc=${fields}`)
// #endregion

const DefaultService = {
    getFiltered: getFiltered,
    getContactsAll: getContactsAll,
    getContactsFilteredByGender: getContactsFilteredByGender,
    getContactsFilteredByNationalite: getContactsFilteredByNationalite
}

export default DefaultService