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
        key: 'viewCompanies',
        path: '/administrator/companies',
        component: React.lazy(() => import('views/administrator/Drivers')),
        authority: [],
    },
    {
        key: 'viewDrivers',
        path: '/administrator/drivers',
        component: React.lazy(() => import('views/administrator/Drivers')),
        authority: [],
    },

    {
        key: 'viewRoutes',
        path: '/administrator/routes',
        component: React.lazy(() => import('views/administrator/Drivers')),
        authority: [],
    },
    {
        key: 'viewTickets',
        path: '/src/views/demo/ViewTickets.js',
        component: React.lazy(() => import('views/administrator/Drivers')),
        authority: [],
    },
    {
        key: 'viewVehicles',
        path: '/src/views/demo/ViewVehicles.js',
        component: React.lazy(() => import('views/administrator/Drivers')),
        authority: [],
    },
    // {
    //     key: 'groupMenu.collapse.item2',
    //     path: '/group-collapse-menu-item-view-2',
    //     component: React.lazy(() => import('views/demo/GroupCollapseMenuItemView2')),
    //     authority: [],
    // },
]