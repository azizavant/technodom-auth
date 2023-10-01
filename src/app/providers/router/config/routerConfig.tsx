import { Navigate, Route } from '@tanstack/react-location'
import { Registration } from '@/pages/Registration'
import { Authorization } from '@/pages/Authorization'
import { OauthInitialization } from '@/pages/OauthInitialization'
import { ResetPassword } from '@/pages/ResetPassword'
import { ResetPasswordPhone } from '@/pages/ResetPasswordPhone'
import { HotelAddEditPage, HotelsListPage } from '@/pages/HotelsList'
import { Settings } from '@/pages/Settings'
import {HotelTariffsPage, HotelTariffsAddEditPage} from '@/pages/HotelTariffs/'
import { NumberCategoriesAddEditPage, NumberCategoriesPage } from '@/pages/NumberCategories'
import { AddEditBankCard } from '@/widgets/SettingsAddEditBankCard'
import { SurveySuccessfully } from '@/pages/SurveySuccessfully'
import { Survey } from '@/pages/Survey'
import { EventListAddEditPage, EventListPage } from '@/pages/EventList'
import { EventTariffsAddEditPage, EventTariffsPage } from '@/pages/EventTariffs'
import { EventScheduleAddEditPage, EventSchedulePage } from '@/pages/EventSchedule'
import { EventPaidOptionsAddEditPage, EventPaidOptionsPage } from '@/pages/EventPaidOptions'
import { EventOrdersPage, EventAddOrderPage } from '@/pages/EventOrdersPage'
import {
  AppRoutes,
  getEventListRoutes,
  getNumberCategoriesRoutes,
  getResetRoutes,
  getHotelRoutes,
  getRouteAuthorization,
  getRouteHotels,
  getRouteHotelTariffs,
  getRouteEventList,
  getRouteMain,
  getRouteNumberCategories,
  getRouteOauthInitialization,
  getRouteRegistration,
  getRouteResetPassword,
  getRouteSettings,
  getRouteSurvey,
  getSettingsRoutes,
  getHotelTariffsRoutes,
  getSurveySuccessfullyRoutes,
  getEventTariffRoutes,
  getRouteEventTariffs,
  getRouteEventSchedule,
  getEventScheduleRoutes,
  getRouteEventPaidOptions,
  getEventPaidOptionsRoutes, getRouteEventOrders, getEventOrdersRoutes
} from '@/shared/static/router'


// Каждый маршрут отделен своим ключом объекта, внутри путь и элемент

export const routerConfig: Record<AppRoutes, Route> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <Navigate to={getRouteEventList()}/>
  },
  [AppRoutes.REGISTRATION]: {
    path: getRouteRegistration(),
    element: <Registration/>
  },
  [AppRoutes.AUTHORIZATION]: {
    path: getRouteAuthorization(),
    element: <Authorization/>
  },
  [AppRoutes.OAUTH]: {
    path: getRouteOauthInitialization(),
    element: <OauthInitialization/>
  },
  [AppRoutes.RESET]: {
    path: getRouteResetPassword(),
    children: [
      {
        path: getResetRoutes.MAIN,
        element: <ResetPassword/>
      },
      {
        path: getResetRoutes.PHONE,
        element: <ResetPasswordPhone/>
      }
    ]
  },
  [AppRoutes.HOTELS]: {
    path: getRouteHotels(),
    children: [
      {
        path: getHotelRoutes.MAIN,
        element: <HotelsListPage/>
      },
      {
        path: getHotelRoutes.ADD_EDIT_HOTEL,
        element: <HotelAddEditPage/>
      }
    ]
  },
  [AppRoutes.SETTINGS]: {
    path: getRouteSettings(),
    children: [
      {
        path: getSettingsRoutes.MAIN,
        element: <Settings/>
      },
      {
        path: getSettingsRoutes.ADD_EDIT_CARD,
        element: <AddEditBankCard/>
      }
    ]
  },
  [AppRoutes.NUMBER_CATEGORIES]: {
    path: getRouteNumberCategories(),
    children: [
      {
        path: getNumberCategoriesRoutes.MAIN,
        element: <NumberCategoriesPage/>
      },
      {
        path: getNumberCategoriesRoutes.ADD_EDIT_NUMBER_CATEGORIES,
        element: <NumberCategoriesAddEditPage/>
      }
    ]
  },
  [AppRoutes.HOTEL_TARIFFS]: {
    path: getRouteHotelTariffs(),
    children: [
      {
        path: getHotelTariffsRoutes.MAIN,
        element: <HotelTariffsPage/>
      },
      {
        path: getHotelTariffsRoutes.ADD_EDIT_HOTEL_TARIFFS,
        element: <HotelTariffsAddEditPage/>
      }
    ]
  },
  [AppRoutes.EVENT_LIST]: {
    path: getRouteEventList(),
    children: [
      {
        path: getEventListRoutes.MAIN,
        element: <EventListPage/>
      },
      {
        path: getEventListRoutes.ADD_EDIT_EVENT_LIST,
        element: <EventListAddEditPage/>
      }
    ]
  },
  [AppRoutes.SURVEY]: {
    path: getRouteSurvey(),
    children: [
      {
        path: getSurveySuccessfullyRoutes.MAIN,
        element: <Survey/>
      },
      {
        path: getSurveySuccessfullyRoutes.SUCCESSFULLY,
        element: <SurveySuccessfully/>
      }
    ]
  },
  [AppRoutes.EVENT_TARIFFS]: {
    path: getRouteEventTariffs(),
    children: [
      {
        path: getEventTariffRoutes.MAIN,
        element: <EventTariffsPage/>
      },
      {
        path: getEventTariffRoutes.ADD_EDIT_EVENT_TARIFF,
        element: <EventTariffsAddEditPage/>
      }
    ]
  },
  [AppRoutes.EVENT_SCHEDULE]: {
    path: getRouteEventSchedule(),
    children: [
      {
        path: getEventScheduleRoutes.MAIN,
        element: <EventSchedulePage/>
      },
      {
        path: getEventScheduleRoutes.ADD_EDIT_EVENT_SCHEDULE,
        element: <EventScheduleAddEditPage/>
      },
      {
        path: getEventScheduleRoutes.ADD_ORDER,
        element: <EventAddOrderPage/>
      }
    ]
  },
  [AppRoutes.EVENT_PAID_OPTIONS]: {
    path: getRouteEventPaidOptions(),
    children: [
      {
        path: getEventPaidOptionsRoutes.MAIN,
        element: <EventPaidOptionsPage/>
      },
      {
        path: getEventPaidOptionsRoutes.ADD_EDIT_EVENT_PAID_OPTIONS,
        element: <EventPaidOptionsAddEditPage/>
      }
    ]
  },
  [AppRoutes.EVENT_ORDERS]: {
    path: getRouteEventOrders(),
    children: [
      {
        path: getEventOrdersRoutes.MAIN,
        element: <EventOrdersPage/>
      },
      {
        path: getEventOrdersRoutes.ADD_EDIT_EVENT_ORDER,
        element: <div>В разработке</div>
      }
    ]
  }
}
