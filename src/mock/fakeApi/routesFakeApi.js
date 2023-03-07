export default function routesFakeApi (server, apiPrefix) {

    server.get(`${apiPrefix}/admin/routes`, schema =>  schema.db.routesList )
    
    
}