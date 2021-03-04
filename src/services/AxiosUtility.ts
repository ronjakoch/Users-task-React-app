import axios, {AxiosInstance} from "axios";

const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:4000",
        headers: {
        "Content-Type": "application/json"
}
});

export default defaultAxiosInstance;