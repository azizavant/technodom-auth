import {Dispatch} from 'redux'
import toast from 'react-hot-toast'
import { UserLogging, UserType } from '@/shared/api/types'
import { NavigateOptions, NavigateType } from '@tanstack/react-location'
import { getRouteMain, getRouteRegistration } from '@/app/providers/router/config/routerConfig'
import { checkByPhoneNumber, login } from '@/features/AuthorizationForm/model/api/authorization'
import { register } from '@/features/RegistrationForm/model/api/registration'
import { recoverPassword } from '@/features/ResetPasswordPhone/model/api/registration'

const SET_IS_LOADING = 'SET_IS_LOADING' as const
const SET_USER = 'SET_USER' as const
const CHECK_PHONE_NUMBER = 'CHECK_PHONE_NUMBER' as const

//TYPES
export type ActionType =
    | ReturnType<typeof setUser>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof checkPhoneNumber>

interface PhoneData {
    hasAccount: boolean,
    phoneNumber: string
}

export type AuthStateType = {
    phoneData: PhoneData
    isLoading: boolean;
    user: UserType | undefined
}

//REDUCER
const initState: AuthStateType = {
    phoneData: {
        hasAccount: false,
        phoneNumber: ''
    },
    isLoading: false,
    user: undefined
}
export const authReducer = (state: AuthStateType = initState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER: {
            return {...state, user: action.user}
        }
        case CHECK_PHONE_NUMBER: {
            return {...state, phoneData: action.phoneData}
        }
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.value
            }
        }
        default:
            return state
    }
}

//ACTION CREATORS
export const checkPhoneNumber = (phone: PhoneData) => (
    {type: CHECK_PHONE_NUMBER, phoneData: phone}
)

export const setUser = (user: UserType) => (
    {type: SET_USER, user}
)

export const setIsLoading = (value: boolean) => ({
    type: SET_IS_LOADING, value
})


//THUNK CREATORS
export const checkPhoneNumberTC = (phoneNumber: string, navigate: (options: NavigateOptions<any>) => void ) =>
  async (dispatch: Dispatch) => {
    try {
        dispatch(setIsLoading(true))
        const { data: {hasAccount} } = await checkByPhoneNumber(phoneNumber)
        dispatch(checkPhoneNumber({ hasAccount, phoneNumber }))
        if (hasAccount) {
            toast('Пожалуйста, введите свой пароль чтобы продолжить авторизацию!')
        } else {
            toast('Вы были перенаправлены на страницу регистрации!')
            navigate({to: getRouteRegistration()})
        }
    } catch (e) {
        toast.error('Нужно авторизоваться!')
        navigate({to: getRouteRegistration()})
    } finally {
        dispatch(setIsLoading(false))
    }
}

export const loginTC = (user: UserLogging, navigate: (options: NavigateOptions<any>) => void) => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsLoading(true))
        const {data} = await login(user)

        dispatch(setUser(data.user))
        navigate({to: getRouteMain()})
        toast.success('Поздравляем, вы успешно авторизовались!')

        // При необходимости данные подьзователя можно хранить тут
        // localStorage.setItem('user', JSON.stringify(user))
    } catch (e) {
        toast.error('Неверный номер или пароль!')
    } finally {
        dispatch(setIsLoading(false))
    }
}

export const registerTC = (user: UserType, navigate: (options: NavigateOptions<any>) => void) => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsLoading(true))
        const {data} = await register(user)
        dispatch(setUser(data.user))
        toast.success('Поздравляем, вы успешно зарегистрировались!')
        navigate({to: getRouteMain()})

        // localStorage.setItem('user', JSON.stringify(user))
    } catch (e: any) {
        toast.error(e.message)
    } finally {
        dispatch(setIsLoading(false))
    }
}

export const resetPasswordTC = (phoneNumber: string, navigate: (options: NavigateOptions<any>) => void ) =>
  async (dispatch: Dispatch) => {
      try {
          dispatch(setIsLoading(true))
          const { data } = await recoverPassword(phoneNumber)
          dispatch(setUser(data.user))
          navigate({to: getRouteMain()})
          toast('Поздравляем, вы успешно авторизовались!')
      } catch (e: any) {
          toast.error(e.message)
          navigate({to: getRouteRegistration()})
      } finally {
          dispatch(setIsLoading(false))
      }
  }
