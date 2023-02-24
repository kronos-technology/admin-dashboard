

export default function driversFakeApi (server, apiPrefix) {

    server.get(`${apiPrefix}/administrator/drivers`, (schema) => {
        
        return schema.db.driverData
    })
    
    
}