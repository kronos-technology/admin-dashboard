
import { createServer } from 'miragejs'
import appConfig from 'configs/app.config'  
import { driverList } from './data/driverData'
import { driversFakeApi } from './fakeApi'
import { companiesList } from './data/companiesData'
import { companiesFakeApi } from './fakeApi'
import { checkpointsList } from './data/checkpointsData'
import { checkpointsFakeApi} from './fakeApi'
import { routesList } from './data/routesData'
import { routesFakeApi } from './fakeApi'
import { ticketsList } from './data/ticketsData'
import { ticketsFakeApi } from './fakeApi'
import { vehiclesList } from './data/vehiclesData'
import { vehiclesFakeApi } from './fakeApi'  


const { apiPrefix } = appConfig

export default function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
			server.db.loadData({
		        driverList,
		        companiesList,
		        checkpointsList,
		        routesList,
		        ticketsList,
		        vehiclesList
		        
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
            checkpointsFakeApi(this, apiPrefix)
            routesFakeApi(this, apiPrefix)
            ticketsFakeApi(this, apiPrefix)
            vehiclesFakeApi(this, apiPrefix)
            
            
        },
    })
}