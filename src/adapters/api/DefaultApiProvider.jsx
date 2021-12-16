import axios from 'axios'

export const DefaultApiProvider = axios.create({
  baseURL: 'http://localhost:8055/'
})
