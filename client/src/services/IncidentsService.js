import axios from "axios";

class IncidentsService {
  static create(data, onSuccess, onError) {
    axios
      .post("/api/incidents/", data, { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }

  static selectall(onSuccess, onError) {
    axios
      .get("/api/incidents", { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }

  static selectbyid(id, onSuccess, onError) {
    axios
      .get("/api/incidents/" + id, { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }

  static update(data, onSuccess, onError) {
    axios
      .put("/api/incidents/" + data.id, data, { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }

  static delete(id, onSuccess, onError) {
    axios
      .delete("/api/incidents/" + id, { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }

    static votes(data, onSuccess, onError) {
        axios.put('/api/incidents/votes/' + data.id,
            data,
            { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }
}

export default IncidentsService;
