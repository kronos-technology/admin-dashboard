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
    /** Example purpose only, please remove */
    {
        key: 'viewDrivers',
        path: '/src/views/demo/ViewDrivers.js',
        component: React.lazy(() => import('views/demo/ViewDrivers')),
        authority: [],
    },
    {
        
            key: 'viewCompanies',
            path: '/src/views/demo/ViewCompanies.js',
            component: React.lazy(() => import('views/demo/ViewCompanies')),
            authority: [],
          
        
    },
    {
        key: 'viewRoutes',
        path: '/src/views/demo/ViewRoutes.js',
        component: React.lazy(() => import('views/demo/ViewRoutes')),
        authority: [],
    },
    {
        key: 'viewTickets',
        path: '/src/views/demo/ViewTickets.js',
        component: React.lazy(() => import('views/demo/ViewTickets')),
        authority: [],
    },
    {
        key: 'viewVehicles',
        path: '/src/views/demo/ViewVehicles.js',
        component: React.lazy(() => import('views/demo/ViewVehicles')),
        authority: [],
    },
    // {
    //     key: 'groupMenu.collapse.item2',
    //     path: '/group-collapse-menu-item-view-2',
    //     component: React.lazy(() => import('views/demo/GroupCollapseMenuItemView2')),
    //     authority: [],
    // },
]