import axios from 'axios'

// Достаем для работы апишку
export const API = import.meta.env.VITE_APP_API_URL

const $host = axios.create({
  baseURL: 'http://185.22.67.86:5000/api'
})

export { $host }
