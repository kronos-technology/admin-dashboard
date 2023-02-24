
import { createServer } from 'miragejs'
import appConfig from 'configs/app.config'  


import {driverData} from './data/driverData'

import { driversFakeApi } from './fakeApi'

const { apiPrefix } = appConfig

export default function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
			server.db.loadData({
			    
		    driverData
		    
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