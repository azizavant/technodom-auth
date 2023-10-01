// TODO здесь добавить AppRoutes в будущем и функции на пути

// Задаем enum ключи, для хорошего отделения маршрутов

export enum AppRoutes {
  MAIN = 'main',
  REGISTRATION = 'registration',
  AUTHORIZATION = 'authorization',
  OAUTH = 'oauth2',
  RESET = 'reset',
  HOTELS = 'hotels',
  SETTINGS = 'settings',
  HOTEL_TARIFFS = 'hotel-tariffs',
  NUMBER_CATEGORIES = 'number-categories',
  EVENT_LIST = 'event-list',
  EVENT_TARIFFS = 'event-tariffs',
  EVENT_SCHEDULE = 'event-schedule',
  EVENT_PAID_OPTIONS = 'event-paid-options',
  EVENT_ORDERS = 'event-orders',
  SURVEY = 'survey',
}


// Путь к каждому маршруту

export const getRouteMain = () => '/'
export const getRouteRegistration = () => '/registration'
export const getRouteAuthorization = () => '/authorization'
export const getRouteOauthInitialization = () => '/oauth2'
export const getRouteResetPassword = () => '/reset-password'
export const getRouteHotels = () => '/hotels'
export const getRouteSettings = () => '/settings'
export const getRouteNumberCategories = () => '/number-categories'
export const getRouteHotelTariffs = () => '/hotel-tariffs'
export const getRouteEventList = () => '/event-list'
export const getRouteEventTariffs = () => '/event-tariffs'
export const getRouteEventSchedule = () => '/event-schedule'
export const getRouteEventPaidOptions = () => '/event-paid-options'
export const getRouteEventOrders = () => '/event-orders'
export const getRouteSurvey = () => '/survey'


// Дополнительные пути

export enum getResetRoutes {
  MAIN = '/',
  PHONE = '/phone',
  EMAIL = '/email',
  SUCCESS = '/success'
}

export enum getHotelRoutes {
  MAIN = '/',
  ADD_EDIT_HOTEL = '/add-edit-hotel'
}

export enum getSettingsRoutes {
  MAIN = '/',
  ADD_EDIT_CARD = '/add-edit-card'
}

export enum getHotelTariffsRoutes {
  MAIN = '/',
  ADD_EDIT_HOTEL_TARIFFS = '/add-edit-hotel-tariffs'
}

export enum getEventListRoutes {
  MAIN = '/',
  ADD_EDIT_EVENT_LIST = '/add-edit-event-list'
}

export enum getEventTariffRoutes {
  MAIN = '/',
  ADD_EDIT_EVENT_TARIFF = '/add-edit-event-tariff'
}

export enum getNumberCategoriesRoutes {
  MAIN = '/',
  ADD_EDIT_NUMBER_CATEGORIES = '/add-edit-number-categories'
}

export enum getSurveySuccessfullyRoutes {
  MAIN = '/',
  SUCCESSFULLY = '/successfully'
}

export enum getEventScheduleRoutes {
  MAIN = '/',
  ADD_EDIT_EVENT_SCHEDULE = '/add-edit-event-schedule',
  ADD_ORDER = '/add-order'
}

export enum getEventPaidOptionsRoutes {
  MAIN = '/',
  ADD_EDIT_EVENT_PAID_OPTIONS = '/add-edit-event-paid-options'
}

export enum getEventOrdersRoutes {
  MAIN = '/',
  ADD_EDIT_EVENT_ORDER = '/add-edit-event-order',
}

// Доступные маршруты при отсутствии пользователя

export function availableRoutes(location: string) {
  return (
    location !== AppRoutes.AUTHORIZATION &&
    location !== AppRoutes.REGISTRATION &&
    location !== AppRoutes.OAUTH &&
    location !== AppRoutes.SURVEY
  )
}



