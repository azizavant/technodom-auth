
export interface UserType {
  phoneNumber: string
  password: string
  name: string
  email: string
}

export interface UserLogging {
  phoneNumber: string
  password: string
}

export interface CheckPhoneNumberType {
  phoneNumber: string
}

export interface AuthResponseType {
  success: boolean
  user: UserType
}
