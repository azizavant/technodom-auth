import React, { Suspense, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from '@tanstack/react-location'
// import { useUserStore } from '@/entities/user-session'
import { Spinner } from '@/shared/ui/Spinner'
import { availableRoutes } from '@/shared/static/router'

export const App = () => {

  // const { user , addUser} = useUserStore()

  const navigate = useNavigate()
  const location: string = useLocation().current.pathname.split('/')[1]

  // useEffect((): void => {
  //   if (!user && availableRoutes(location)) {
  //     navigate({ to: '/authorization', replace: true })
  //   }
  // }, [user])

  return (
    <>
      {
        true
          ?
            <Suspense fallback={<Spinner/>}>
              Вы залогинены
              <Outlet/>
            </Suspense>
          :
            <Suspense fallback={<Spinner/>}>
              Вы не авторизованы!
              <Outlet/>
            </Suspense>
      }
    </>
  )
}
