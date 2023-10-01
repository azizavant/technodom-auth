import { Route } from '@tanstack/react-location'
import { Registration } from '@/pages/Registration'
import { Authorization } from '@/pages/Authorization'
import { ResetPasswordPhone } from '@/pages/ResetPasswordPhone'

// Задаем enum ключи, для хорошего отделения маршрутов

export enum AppRoutes {
  MAIN = 'main',
  REGISTRATION = 'registration',
  AUTHORIZATION = 'authorization',
  RESET = 'reset-password',
}


// Путь к каждому маршруту

export const getRouteMain = () => '/'
export const getRouteRegistration = () => '/registration'
export const getRouteAuthorization = () => '/authorization'
export const getRouteResetPassword = () => '/reset-password'


// Доступные маршруты при отсутствии пользователя

export function availableRoutes(location: string) {
  return (
    location !== AppRoutes.AUTHORIZATION &&
    location !== AppRoutes.REGISTRATION &&
    location !== AppRoutes.RESET
  )
}

// Каждый маршрут отделен своим ключом объекта, внутри путь и элемент

export const routerConfig: Record<AppRoutes, Route> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <div>Main Page</div>
  },
  [AppRoutes.REGISTRATION]: {
    path: getRouteRegistration(),
    element: <Registration/>
  },
  [AppRoutes.AUTHORIZATION]: {
    path: getRouteAuthorization(),
    element: <Authorization/>
  },
  [AppRoutes.RESET]: {
    path: getRouteResetPassword(),
    element: <ResetPasswordPhone/>
  }
}
