

export default function checkpointsFakeApi (server, apiPrefix) {

    server.get(`${apiPrefix}/admin/checkpoints`, schema =>  schema.db.checkpointsList )
    
    
}