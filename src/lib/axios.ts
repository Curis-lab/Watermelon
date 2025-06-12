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

// Event Data Processing
export class DataFetcher {
  constructor() {}

  setLoading(loading: boolean) {
    // This method is kept for potential future use or extension
    console.log(loading);
  }

  async request(method: string, url: string, data: any = null, options: object = {}): Promise<any> {
    this.setLoading(true);
    try {
      const response = await instance.request({
        method,
        url,
        data,
        ...options,
      });
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    } finally {
      this.setLoading(false);
    }
  }

  fetchData(url: string, options: object = {}): Promise<any> {
    return this.request("get", url, null, options);
  }

  postData(url: string, data: any, options: object = {}): Promise<any> {
    return this.request("post", url, data, options);
  }

  putData(url: string, data: any, options: object = {}): Promise<any> {
    return this.request("put", url, data, options);
  }

  deleteData(url: string, options: object = {}): Promise<any> {
    return this.request("delete", url, null, options);
  }
}

export default instance;
