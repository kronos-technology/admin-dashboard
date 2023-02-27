
import { createServer } from 'miragejs'
import appConfig from 'configs/app.config'  


import {driverData, driverList} from './data/driverData'

import { driversFakeApi } from './fakeApi'

const { apiPrefix } = appConfig

export default function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
			server.db.loadData({
		        driverList
			})
		},
        routes() {
            this.urlPrefix = ''
            this.namespace = ''
            this.passthrough(request => {
                let isExternal = request.url.startsWith('http')
                return isExternal
            })
            this.passthrough()
            
            
            driversFakeApi(this, apiPrefix)
        },
    })
}