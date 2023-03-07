import ApiService from "./ApiService"

export async function apiGetDrivers () {
    return ApiService.fetchData({
        url: '/admin/drivers',
        method: 'get',
    })
}

export async function apiGetCompanies () {
    return ApiService.fetchData({
        url: '/admin/companies',
        method: 'get',
    })
}

export async function apiGetCheckpoints () {
    return ApiService.fetchData({
        url: '/admin/checkpoints',
        method: 'get',
    })
}

export async function apiGetRoutes () {
    return ApiService.fetchData({
        url: '/admin/routes',
        method: 'get',
    })
}

export async function apiGetTickets () {
    return ApiService.fetchData({
        url: '/admin/tickets',
        method: 'get',
    })
}


export async function apiGetVehicles () {
    return ApiService.fetchData({
        url: '/admin/vehicles',
        method: 'get',
    })
}
