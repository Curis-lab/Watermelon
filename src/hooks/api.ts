import { useAuth } from "../providers/AuthProvider";

export function useApi() {
  const { authState, setToken, clearToken } = useAuth();

  async function request(url: string, options = {}) {
    const headers = {
      ...options,
    };

    console.log("auth state ", authState);
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

  async function login(credentials: {
    email: string;
    password: string;
  }): Promise<any> {
    clearToken();

    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { body } = await response.json();

    setToken({
      token: body.token,
      expiresIn: 12,
    });

    return body;
  }

  return {
    request,
    login,
  };
}
