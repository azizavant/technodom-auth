import React, { Suspense, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from '@tanstack/react-location'
import { Spinner } from '@/shared/ui/Spinner'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { AppStateType } from '@/entities/store/store'
import { AuthStateType } from '@/entities/store/reducers/authReducer'
import { availableRoutes } from '@/app/providers/router/config/routerConfig'

export const App = () => {

  const { user } = useSelector<AppStateType, AuthStateType>(state => state.auth)

  const navigate = useNavigate()
  const location: string = useLocation().current.pathname.split('/')[1]

  useEffect((): void => {
    if (!user && availableRoutes(location)) {
      navigate({ to: '/registration', replace: true })
    }
  }, [user])

  return (
    <>
      {
        user
          ? (
            <Suspense fallback={ <Spinner/> }>
              <div className="w-screen h-screen flex flex-col items-center justify-start mt-16">
                <p className="font-medium text-2xl text-orange">Ваши данные:</p>
                <span className="font-medium text-xl text-orange">Имя:{'  '}{user.name}</span>
                <span className="font-medium text-xl text-orange">Номер:{'  '}{user.phoneNumber}</span>
                <span className="font-medium text-xl text-orange">Почта:{'  '}{user.email}</span>
                <span className="font-medium text-xl text-orange">Пароль:{'  '}{user.password}</span>
              </div>
            </Suspense>
          ) : (
            <Suspense fallback={ <Spinner/> }>
              <Toaster toastOptions={ { duration: 5000 } }/>
              <Outlet/>
            </Suspense>
          )
      }
    </>
  )
}
