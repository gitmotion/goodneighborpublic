import axios from 'axios'

class PoliceStationsService {
    static SelectAll(onSuccess, onError) {
        axios.get(`https://tsdgis.longbeach.gov/webgis/rest/services/OPENDATA/MapItData/MapServer/6/query?where=1%3D1&outFields=*&outSR=4326&f=json`,
        )
            .then(onSuccess)
            .catch(onError)
    }

}

export default PoliceStationsService