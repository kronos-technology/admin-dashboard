

export default function companiesFakeApi (server, apiPrefix) {

    server.get(`${apiPrefix}/admin/companies`, schema =>  schema.db.companiesList )
    
    
}