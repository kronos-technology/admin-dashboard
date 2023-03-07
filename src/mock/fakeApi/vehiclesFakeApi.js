export default function vehiclesFakeApi (server, apiPrefix) {

    server.get(`${apiPrefix}/admin/vehicles`, schema =>  schema.db.vehiclesList )
    
    
}