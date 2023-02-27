

export default function driversFakeApi (server, apiPrefix) {

    server.get(`${apiPrefix}/admin/drivers`, schema =>  schema.db.driverList )
    
    
}