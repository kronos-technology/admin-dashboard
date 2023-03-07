function getDate(dayString) {
    const today = new Date()
    const year = today.getFullYear().toString()
    let month = (today.getMonth() + 1).toString()

    if (month.length === 1) {
        month = "0" + month
    }

    return dayString.replace("YEAR", year).replace("MONTH", month)
}

export const ticketsList = [ {
       "checkpointId":"FACA-ABOGADOS",
       "companyId":"RAPIDO-SANTA",
       "driverId":"1070959307",
       "plate":"ZIY246",
       "routeId":"FACATA-VTEMAD-BOGOTA-13",
       "timestamp":"2022-05-18T12:00:00.123.000-05:00",
       "vehicleNumber":"33"
    },
    {
       "checkpointId":"FACA-ABOGADOS",
       "companyId":"FLOTA-AYACUCHO",
       "driverId":"1070947951",
       "plate":"BAM577",
       "routeId":"FACATA-VTEMAD-BOGOTA-13",
       "timestamp":"2022-05-18T12:06:28.313.000-05:00",
       "vehicleNumber":"104"
    },
    {
       "checkpointId":"FACA-ABOGADOS",
       "routeId":"FACATA-VTEMAD-BOGOTA-13",
       "timestamp":"2022-05-18T12:15:00.000-05:00",
       "plate":"RPG333",
       "driverId":"19134629",
       "vehicleNumber":"058",
       "companyId":"TRANS-VILLETAX"
    },
    {
       "checkpointId":"FACA-ABOGADOS",
       "routeId":"FACATA-BOGOTA-80",
       "timestamp":"2022-06-19T10:10:35.000-05:00",
       "plate":"ABC132",
       "driverId":"1020874455",
       "vehicleNumber":"111",
       "companyId":"FLOTA-AYACUCHO"
    },
    {
       "checkpointId":"FACA-ABOGADOS",
       "routeId":"FACATA-BOGOTA-80",
       "timestamp":"2022-05-19T10:23:35.000-05:00",
       "plate":"IYX332",
       "driverId":"19874580",
       "vehicleNumber":"666",
       "companyId":"FLOTA-AYACUCHO"
    },
    {
       "checkpointId":"FACA-CARTAGENITA",
       "routeId":"FACATA-VTEMAD-BOGOTA-13",
       "timestamp":"2022-05-18T12:15:00.000-05:00",
       "plate":"ZIY246",
       "driverId":"1070959307",
       "vehicleNumber":"33",
       "companyId":"RAPIDO-SANTA"
    },
    {
       "checkpointId":"FACA-CARTAGENITA",
       "routeId":"FACATA-VTEMAD-BOGOTA-13",
       "timestamp":"2022-05-18T12:23:02.000-05:00",
       "plate":"BAM577",
       "driverId":"1070947951"
    },
    {
       "checkpointId":"BJCA-CORSO",
       "routeId":"FACATA-VTEMAD-BOGOTA-13",
       "timestamp":"2022-05-18T12:19:00.000-05:00",
       "plate":"ZIY246",
       "driverId":"1070959307",
       "vehicleNumber":"33",
       "companyId":"RAPIDO-SANTA"

    },
    {
       "checkpointId":"BJCA-CORSO",
       "routeId":"FACATA-VTEMAD-BOGOTA-13",
       "timestamp":"2022-05-18T12:26:12.000-05:00",
       "plate":"BAM577",
       "driverId":"1070947951",
       "vehicleNumber":"104",
       "companyId":"FLOTA-AYACUCHO"
    },
    {
       "checkpointId":"MADR-PROSPERIDAD",
       "routeId":"FACATA-VTEMAD-BOGOTA-13",
       "timestamp":"2022-05-18T12:25:33.000-05:00",
       "plate":"ZIY246",
       "driverId":"1070959307",
       "vehicleNumber":"33",
       "companyId":"RAPIDO-SANTA"
    },
    {
       "checkpointId":"MADR-PROSPERIDAD",
       "routeId":"FACATA-VTEMAD-BOGOTA-13",
       "timestamp":"2022-05-18T12:32:28.000-05:00",
       "plate":"BAM577",
       "driverId":"1070947951",
       "vehicleNumber":"104",
       "companyId":"FLOTA-AYACUCHO"
    }]