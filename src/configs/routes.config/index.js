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
        component: React.lazy(() => import('views/Home')),
        authority: [],
    },
    {
        key: 'adminCompanies',
        path: '/administrator/companies',
        component: React.lazy(() => import('views/administrator/Companies')),
        authority: [],
    },
    {
        key: 'adminDrivers',
        path: '/administrator/drivers',
        component: React.lazy(() => import('views/administrator/Drivers')),
        authority: [],
    },

    {
        key: 'adminRoutes',
        path: '/administrator/routes',
        component: React.lazy(() => import('views/administrator/Routes')),
        authority: [],
    },
    {
        key: 'adminTickets',
        path: '/administrator/tickets',
        component: React.lazy(() => import('views/administrator/Tickets')),
        authority: [],
    },
    {
        key: 'adminVehicles',
        path: '/administrator/vehicles',
        component: React.lazy(() => import('views/administrator/Vehicles')),
        authority: [],
    },

]