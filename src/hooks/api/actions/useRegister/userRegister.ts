import axios from "axios";
import { apiRequest } from "../../../../lib/api/apiclient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IBaseFormRegister } from "../../../../components/templates/OnboardingTemplate/OnboardingTemplate";

export const useRegister = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (userData: IBaseFormRegister) => {
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

  return mutation;
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
  baseURL: `https://event-2-h3bg.onrender.com/api`,
});
const fetcher = async (data:{email:string, password:string}) => {
  return await api.post("/auth/login", data, {
    withCredentials: true,
  });
};

export const authStatus = async () => {
  return await api.get("/auth/status", { withCredentials: true });
};

export const logoutUser = async () => {
  return await api.post("/auth/logout", {}, { withCredentials: true });
};

export const setup2FA = async () => {
  return await api.get("/auth/2fa/setup",  { withCredentials: true });
};
export const verify2FA = async (token:string) => {
  return await api.post(
    "/auth/2fa/verify",
    { token },
    { withCredentials: true }
  );
};

export const reset2FA = async () => {
  return await api.post("/auth/2fa/reset", {}, { withCredentials: true });
};
