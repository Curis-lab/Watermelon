import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { formatPath } from "../../../../utils/formatPath";
import { headers } from "../../../../utils/apiUtils";

type ApiErrorHandler = (
  setErrors: Dispatch<SetStateAction<object>>, 
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


const useApi = () => {
  const [errors] = useState<Record<string, string>>({}); // Removed 'setErrors' as it is unused
  const [loading, setLoading] = useState<boolean>(false);

  const makeRequest = useCallback(
    async (
      apiCaller: () => Promise<Response>,
      _requestId: string, // Prefixed 'requestId' with '_' to indicate it's unused
      loadingOn: boolean = true
    ): Promise<Response> => {
      
      if (loadingOn) {
        setLoading(true);
      }
      try {
        const res = await apiCaller();
        setLoading(false);
        return res;
      } catch (e: unknown) { // Changed 'Error' to 'unknown' for catch clause
        throw new Error(String(e)); // Convert 'e' to string for error message
      }
    },
    []
  );
  const createRequest = useCallback((path: string, options: RequestInit) => {
    const defaultOptions: RequestInit = {
      headers,
      credentials: "include" as RequestCredentials, // Explicitly cast to RequestCredentials
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
