export function useApi() {
  const { authState, isAuthenticated } = {
    authState: {},
    isAuthenticated: false,
  };

  async function request(url: string, options: Record<string, any> = {}) {
    const headers: Record<string, string> = {
      ...options.headers,
    };

    if (isAuthenticated) {
      headers.Authorization = `Bearer ${authState}`;
    }

    const response = await fetch(url, { ...options, headers });
    if (response.status === 401) {
      throw new Error("Session expired");
    }
    return response;
  }


  //sometime I might need some function
  
  async function login(credentials: {
    email: string;
    password: string;
  }): Promise<any> {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { body } = await response.json();

    // Assuming setToken and clearToken are handled elsewhere
    // setToken({
    //   token: body.token,
    //   expiresIn: 12,
    // });

    return body;
  }

  return {
    request,
    login,
  };
}
