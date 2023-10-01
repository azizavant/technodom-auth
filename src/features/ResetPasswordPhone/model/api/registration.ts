import { $host } from '@/shared/api/auth'
import { AuthResponseType } from '@/shared/api/types'

export const recoverPassword = async (
  phoneNumber: string
)=> {
  return await $host.post<AuthResponseType>('recover-password', { phoneNumber })
}