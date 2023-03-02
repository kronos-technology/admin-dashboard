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