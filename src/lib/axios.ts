import axios from "axios";
const API_URL = "http://localhost:3000/api";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


//Event Data Processing
export  class DataFetcher {
  constructor() {
    this.loading = false;
  }

  setLoading(loading) {
    this.loading = loading;
  }

  async request(method, url, data = null, options = {}) {
    this.setLoading(true);
    try {
      const response = await instance.request({
        method,
        url,
        data,
        ...options,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      this.setLoading(false);
    }
  }

  fetchData(url, options = {}) {
    return this.request("get", url, null, options);
  }

  postData(url, data, options = {}) {
    return this.request("post", url, data, options);
  }

  putData(url, data, options = {}) {
    return this.request("put", url, data, options);
  }

  deleteData(url, options = {}) {
    return this.request("delete", url, null, options);
  }
}

export default instance;
