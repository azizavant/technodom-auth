// TODO Продумать еще раз что сетается в store, после регистрации

export interface Credential {
  id: number
  value: string
}

export interface User {
  id: number
  email?: Credential
  phone?: Credential
}
