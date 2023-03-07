function getDate(dayString) {
    const today = new Date()
    const year = today.getFullYear().toString()
    let month = (today.getMonth() + 1).toString()

    if (month.length === 1) {
        month = "0" + month
    }

    return dayString.replace("YEAR", year).replace("MONTH", month)
}

export const routesList = [
    {
       "routeId":"FACATA-MADRID-BOGOTA-13",
       "origin":"FACATATIVA",
       "destination":"BOGOTA",
       "geojson":"s3://locationtoroute1.geojson"
    },
    {
       "routeId":"FACATA-VTEMAD-BOGOTA-13",
       "origin":"FACATATIVA",
       "destination":"BOGOTA",
       "geojson":"s3://locationtoroute2.geojson"
    },
    {
       "routeId":"FACATA-BOGOTA-80",
       "origin":"FACATATIVA",
       "destination":"BOGOTA",
       "geojson":"s3://locationtoroute3.geojson"
    },
    {
       "routeId":"FACATA-BOJACA",
       "origin":"FACATATIVA",
       "destination":"BOJACA",
       "geojson":"s3://locationtoroute4.geojson"
    },
    {
       "routeId":"BOJACA-BOGOTA",
       "origin":"BOJACA",
       "destination":"BOGOTA",
       "geojson":"s3://locationtoroute5.geojson"
    }]
    
