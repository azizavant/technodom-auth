import axios from 'axios'
import { useUserStore } from '@/entities/user-session'

// Достаем для работы апишку
export const API = import.meta.env.VITE_APP_API_URL

const $host = axios.create({
  baseURL: API,
  withCredentials: true
})

export { $host }
