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
        component: React.lazy(() => import('views/administrator-module/Companies')),
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
        component: React.lazy(() => import('views/administrator-module/Routes')),
        authority: [],
    },
    {
        key: 'adminTickets',
        path: '/administrator/tickets',
        component: React.lazy(() => import('views/administrator-module/Tickets')),
        authority: [],
    },
    {
        key: 'adminVehicles',
        path: '/administrator/vehicles',
        component: React.lazy(() => import('views/administrator-module/Vehicles')),
        authority: [],
    },
        {
        key: 'adminCheckpoint',
        path: '/administrator/checkpoint',
        component: React.lazy(() => import('views/administrator-module/Checkpoint')),
        authority: [],
    },

]