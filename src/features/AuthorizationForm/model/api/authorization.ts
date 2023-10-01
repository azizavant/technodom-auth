import { AuthResponseType, UserLogging } from '@/shared/api/types'
import { $host } from '@/shared/api/auth'

export const login = async (
  userLoginData: UserLogging
)=> {
  return await $host.post<AuthResponseType>('login', userLoginData)
}

export const checkByPhoneNumber = async (
  phoneNumber: string
)=> {
  return await $host.get<{ hasAccount: boolean }>(`check?phoneNumber=${ phoneNumber }`)
}