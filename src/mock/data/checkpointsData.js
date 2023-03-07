function getDate(dayString) {
    const today = new Date()
    const year = today.getFullYear().toString()
    let month = (today.getMonth() + 1).toString()

    if (month.length === 1) {
        month = "0" + month
    }

    return dayString.replace("YEAR", year).replace("MONTH", month)
}

export const checkpointsList =[ {
        "checkpointId": "FACA-ABOGADOS",
        "city": "FACATATIVA",
        "latitude": "4.8081859",
        "longitude": "-74.3545",
        "geohash": "d2g5k529swff",
        "description": "Paradero calle de los abogados"
    },
    {
        "checkpointId": "FACA-CARTAGENITA",
        "city": "FACATATIVA",
        "latitude": "4.7877793",
        "longitude": "74.3339603",
        "geohash": "d2g5k529swff",
        "description": "Puente Peatonal Cartagenita"
    },
    {
        "checkpointId": "BJCA-CORSO",
        "city": "BOJACA",
        "latitude": "4.7731948",
        "longitude": "-74.3180107",
        "geohash": "d2g5hugmbu48",
        "description": "Puente Peatonal El Corso"
    },
    {
        "checkpointId": "MADR-PROSPERIDAD",
        "city": "MADRID",
        "latitude": "4.7392487",
        "longitude": "-74.2773529",
        "geohash": "d2g4vybbh5zr",
        "description": "Glorieta La Prosperidad"
    },
    {
        "checkpointId": "MADR-FINCA",
        "city": "MADRID",
        "latitude": "4.7330623",
        "longitude": "-74.2431775",
        "geohash": "d2g4yt9u0df2",
        "description": "Variante de Madrid. La finca"
    },
    {
        "checkpointId": "MOSQ-SENA",
        "city": "MOSQUERA",
        "latitude": "4.6972294",
        "longitude": "-74.2186001",
        "geohash": "d2g4xp5em708",
        "description": "SENA Mosquera"
    },
    {
        "checkpointId": "BGTA-RIOBOGOTA",
        "city": "BOGOTA",
        "latitude": "4.6958893",
        "longitude": "-74.1732486",
        "geohash": "d2g68nuew11n",
        "description": "Calle 13. Puente Rio Bogota"
    },
    {
        "checkpointId": "BGTA-CALI13",
        "city": "BOGOTA",
        "latitude": "4.6596334",
        "longitude": "-74.138146",
        "geohash": "d2g68bq0rfxe",
        "description": "Calle 13 y Avenida Cali"
    }]
