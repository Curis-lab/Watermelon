import axios from "axios";
import { apiRequest } from "../../../../lib/api/apiclient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRegister = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (userData: {
      name: string;
      email: string;
      password: string;
    }) => {
      return apiRequest({
        url: "/auth/register",
        method: "POST",
        data: userData,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });

  return mutation.mutateAsync;
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (userData: { email: string; password: string }) =>
      await fetcher(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  return mutation.mutateAsync;
};

const api = axios.create({
  baseURL: `http://localhost:3000/api`,
});
const fetcher = async (data) => {
  return await api.post("/auth/login", data, {
    withCredentials: true,
  });
};
