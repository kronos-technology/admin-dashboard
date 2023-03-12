export default function driversFakeApi (server, apiPrefix) {
    server.get(`${apiPrefix}/admin/drivers`, schema =>  schema.db.driverList )
    server.del(`${apiPrefix}/admin/drivers/:id`, (schema, request) =>{
      let id = request.params.id
      schema.db.driverList.remove({driverId: id})
      return `Driver ${id} deleted`
    }
    )
}

