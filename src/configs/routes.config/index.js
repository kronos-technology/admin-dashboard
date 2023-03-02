import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [
    ...authRoute
]

export const protectedRoutes = [
    {
        key: 'signIn',
        path: `/`,
        component: React.lazy(() => import('/')),
        authority: [],
    },
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('views/home')),
        authority: [],
    },
    {
        key: 'adminCompanies',
        path: '/administrator/companies',
        component: React.lazy(() => import('views/administrator-module/companies')),
        authority: [],
    },
    {
        key: 'adminDrivers',
        path: '/administrator/drivers',
        component: React.lazy(() => import('views/administrator-module/drivers')),
        authority: [],
    },

    {
        key: 'adminRoutes',
        path: '/administrator/routes',
        component: React.lazy(() => import('views/administrator-module/routes')),
        authority: [],
    },
    {
        key: 'adminTickets',
        path: '/administrator/tickets',
        component: React.lazy(() => import('views/administrator-module/tickets')),
        authority: [],
    },
    {
        key: 'adminVehicles',
        path: '/administrator/vehicles',
        component: React.lazy(() => import('views/administrator-module/vehicles')),
        authority: [],
    },
        {
        key: 'adminCheckpoint',
        path: '/administrator/checkpoint',
        component: React.lazy(() => import('views/administrator-module/checkpoint')),
        authority: [],
    },

]