import React from 'react'
import { App } from './App'
import '@/style/index.css'
import { createRoot } from 'react-dom/client'
import { ReactLocation, Router } from '@tanstack/react-location'
import { routerConfig } from '@/app/providers/router'
import { Provider } from 'react-redux'
import { store } from '@/entities/store/store'

// Обертки над приложением
const location = new ReactLocation()

const container = document.getElementById('root')

if (container == null) {
  throw new Error('Контейнер root не найден. Не удалось вмонтировать реакт приложение')
}

const root = createRoot(container)

root.render(
  <Router location={location} routes={Object.values(routerConfig)}>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>
)
