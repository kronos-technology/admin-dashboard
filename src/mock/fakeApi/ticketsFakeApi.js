export default function ticketsFakeApi (server, apiPrefix) {

    server.get(`${apiPrefix}/admin/tickets`, schema =>  schema.db.ticketsList )
    
    
}