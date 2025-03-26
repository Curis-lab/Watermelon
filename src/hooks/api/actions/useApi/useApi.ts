import { useCallback } from "react";
import { joinPaths } from "../../../../utils/formatPath";

const useApi = () => {
  const createRequest = useCallback(
    (path: string, options: RequestInit) => {
      const defaultOptions = {
        headers,
        credentials: "include",
      };
      return {
        caller: () => {
          return fetch(joinPaths(path), {
            ...defaultOptions,
            ...options,
          });
        },
      };
    },
    []
  );
  return { createRequest };
};

export default useApi;
