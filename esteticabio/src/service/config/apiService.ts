import axios from "axios";


export const apiService = axios.create({
    baseURL: 'http://datron.appteste02.linkcomaws.local:8080/w3erp/'
})