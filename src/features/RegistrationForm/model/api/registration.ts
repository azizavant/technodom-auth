import { $host } from '@/shared/api/auth'
import { AuthResponseType, UserType } from '@/shared/api/types'

export const register = async (
  user: UserType
) => {
  return await $host.post<AuthResponseType>('register', user)
}