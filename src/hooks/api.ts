import { useAuth } from "../providers/AuthProvider";

export function useApi() {
  const { authState, setToken, clearToken } = useAuth();
  async function request(url: string, options = {}) {
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    console.log('this is auth state', authState)
    if (authState.token) {
      headers.Authorization = `Bearer ${authState.token}`;
    }

    const response = await fetch(url, { ...options, headers });
    if (response.status === 401) {
      clearToken();
      throw new Error("Session expired");
    }
    return response;
  }
  async function login(credentials: { email: string; password: string }):Promise<any> {
    console.log('this is credential', setToken)
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers:{
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    console.log('this is authentication data on login',data);
    setToken({
      token: data.token,
      expiresIn: 12,
    });
    
    return data;
  }
  return {
    request,
    login,
  };
}
