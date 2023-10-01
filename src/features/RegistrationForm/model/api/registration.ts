import { type schemas } from '@/shared/api'
import { $host } from '@/shared/api/auth'

export const register = async (
  request: schemas['RegisterOrgRequest']
): Promise<schemas['ResponseRegister']> => {
  const { data } = await $host.post('/v1/users/register/partner/', request)
  return data
}
