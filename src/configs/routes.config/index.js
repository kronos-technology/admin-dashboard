import React from 'react'
import authRoute from './authRoute'
import { APP_PREFIX_PATH } from 'constants/route.constant'

export const publicRoutes = [
    ...authRoute
]

export const protectedRoutes = [

    {
        key: 'home',
        path: `${APP_PREFIX_PATH}/home`,
        component: React.lazy(() => import('views/home')),
        authority: [],
    },
    {
        key: 'adminCompanies',
        path: `${APP_PREFIX_PATH}/administrator/companies`,
        component: React.lazy(() => import('views/administrator-module/companies')),
        authority: [],
    },
    {
        key: 'adminDrivers',
        path: `${APP_PREFIX_PATH}/administrator/drivers`,
        component: React.lazy(() => import('views/administrator-module/DriverList')),
        authority: [],
    },

    {
        key: 'adminRoutes',
        path: `${APP_PREFIX_PATH}/administrator/routes`,
        component: React.lazy(() => import('views/administrator-module/routes')),
        authority: [],
    },
    {
        key: 'adminTickets',
        path: `${APP_PREFIX_PATH}/administrator/tickets`,
        component: React.lazy(() => import('views/administrator-module/tickets')),
        authority: [],
    },
    {
        key: 'adminVehicles',
        path: `${APP_PREFIX_PATH}/administrator/vehicles`,
        component: React.lazy(() => import('views/administrator-module/vehicles')),
        authority: [],
    },
        {
        key: 'adminCheckpoint',
        path: `${APP_PREFIX_PATH}/administrator/checkpoints`,
        component: React.lazy(() => import('views/administrator-module/checkpoints')),
        authority: [],
    },

]