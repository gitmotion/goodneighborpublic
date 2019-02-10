import axios from 'axios'

class FileStorageService {
    static create(id, data, onSuccess, onError) {
        axios.post('/api/file-storage/' + id, data, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static uploadImageUrl(url, onSuccess, onError) {
        axios.post('/api/file-storage/image-url?url=' + url, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static selectall(onSuccess, onError) {
        axios.get('/api/file-storage', { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static selectbyid(id, onSuccess, onError) {
        axios.get('/api/file-storage/' + id, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static selectbyincidentid(id, onSuccess, onError) {
        axios.get('/api/file-storage/incident/' + id, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static delete(id, onSuccess, onError) {
        axios.delete('/api/file-storage/' + id, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }
}

export default FileStorageService