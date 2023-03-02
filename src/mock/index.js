
import { createServer } from 'miragejs'
import appConfig from 'configs/app.config'  
import { driverList } from './data/driverData'
import { driversFakeApi } from './fakeApi'
import { companiesList } from './data/companiesData'
import { companiesFakeApi } from './fakeApi'



const { apiPrefix } = appConfig

export default function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
			server.db.loadData({
		        driverList,
		        companiesList
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
            companiesFakeApi(this, apiPrefix)
        },
    })
}