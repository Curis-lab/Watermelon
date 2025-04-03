import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { formatPath, joinPaths } from "../../../../utils/formatPath";
import { headers } from "../../../../utils/apiUtils";

type ApiErrorHandler = (
  setErrors: Dispatch<SetStateAction<{}>>,
  res: Response,
  requestId: string
) => void;

export interface IUseAPI {
  handleBadRequest?: ApiErrorHandler;
  handleNotFound?: ApiErrorHandler;
  handleUnauthorized?: ApiErrorHandler;
  handleForbidden?: ApiErrorHandler;
  handleUnavailable?: ApiErrorHandler;
  propagateErrors?: boolean;
}

//complicated sound
const useApi = () => {
  const [errors, setErrors] = useState<Record<string, stringl>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const makeRequest = useCallback(
    async (
      apiCaller: () => Promise<Response>,
      requestId: string,
      loadingOn: boolean = true
    ): Promise<Response> => {
      
      if (loadingOn) {
        setLoading(true);
      }
      try {
        const res = await apiCaller();
        setLoading(false);
        return res;
      } catch (e: Error) {
        throw new Error(e);
      }
    },
    []
  );
  const createRequest = useCallback((path: string, options: RequestInit) => {
    const defaultOptions = {
      headers,
      credentials: "include",
    };
    return {
      caller: () => {
        return fetch(formatPath(path), {
          ...defaultOptions,
          ...options,
        });
      },
    };
  }, []);

  return {
    createRequest,
    makeRequest,
    errors,
    loading,
  };
};

export default useApi;
