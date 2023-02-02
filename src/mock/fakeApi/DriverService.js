import ApiService from "./ApiService"

export async function apiGetDrivers (data) {
    return ApiService.fetchData({
        url: '/drivers',
        method: 'post',
        data
    })
}

export async function apPutDrivers (data) {
    return ApiService.fetchData({
        url: '/drivers',
        method: 'put',
        data
    })
}

export async function apiGetDriverDetails (params) {
    return ApiService.fetchData({
        url: '/driver-details',
        method: 'get',
        params
    })
}

export async function apiDeleteCrmCustomer (data) {
    return ApiService.fetchData({
        url: '/driver',
        method: 'delete',
        data
    })
}