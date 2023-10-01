import {Dispatch} from 'redux'
import toast from 'react-hot-toast'


//TYPES
export type ActionType =
    | ReturnType<typeof setLogged>
    | ReturnType<typeof setUser>
    | ReturnType<typeof setIsLoading>

type InitStateType = {
    isLogged: boolean;
    isLoading: boolean;
    user: UserType;
}

export type UserLogging = {
    email: string;
    password: string;
}

export type UserType = {
    id: number;
    username: string;
    email: string;
    access_token: string;
}


//REDUCER
const initState: InitStateType = {
    isLogged: false,
    isLoading: false,
    user: {} as UserType,
}
export const authReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'SET-IS-LOGGED': {
            return {...state, isLogged: action.isLogged}
        }
        case 'SET-USER': {
            return {...state, user: action.user}
        }
        case 'SET_IS_LOADING': {
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
export const setLogged = (isLogged: boolean) => (
    {type: 'SET-IS-LOGGED' as const, isLogged}
)

export const setUser = (user: UserType) => (
    {type: 'SET-USER' as const, user}
)

export const setIsLoading = (value: boolean) => ({
    type: 'SET_IS_LOADING' as const, value
})


// //THUNK CREATORS
// export const setUserTC = (user: UserLogging) => async (dispatch: Dispatch) => {
//     try {
//         dispatch(setIsLoading(true))
//         const res = await authApi.login(user)
//         dispatch(setLogged(true))
//         localStorage.setItem('token', res.access_token)
//         localStorage.setItem('user', JSON.stringify(user))
//     } catch (e) {
//         toast.error('Неверный логин или пароль!')
//     } finally {
//         dispatch(setIsLoading(false))
//     }
// }
//
// export const tokenTC = (token: string, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
//     try {
//         dispatch(setIsLoading(true))
//         const user = await authApi.token(token)
//         localStorage.setItem('token', user.access_token)
//         dispatch(setUser(user))
//         toast.success('Сессия успешно возобновлена!')
//     } catch (e) {
//         dispatch(setLogged(false))
//         localStorage.removeItem('token')
//         navigate('/login')
//         toast.custom('Нужно авторизоваться!')
//     } finally {
//         dispatch(setIsLoading(false))
//     }
// }