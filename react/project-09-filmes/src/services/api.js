import axios from "axios";

const apiKey = "";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export { apiKey };
export default api;