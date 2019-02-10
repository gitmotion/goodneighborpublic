import 'axios' from 'axios'

export default class UserService extends React.Component {
    static getAll(onSuccess, onError) {
        axios
            .get(`https://opendata.arcgis.com/datasets/becc7c4243be46deb497b232d4bc92b4_6.geojson`, data)
            .then(onSuccess)
            .catch(onSuccess)
    }
} 