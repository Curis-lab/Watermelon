import { useCallback } from "react";
import useSWR, { SWRConfiguration } from "swr";
import handleErrorResponse from "../httpErrorResponseHandler";
export const useApiGetter = <T>(
  cacheKey: Key,
  fetcher: () => Promise<T>,
  options: SWRConfiguration
) => {
  const { data, error, mutate } = useSWR(cacheKey, fetcher, options);
  const refetch = useCallback(() => {
    mutate().catch(console.warn);
  }, [mutate]);
  return {
    data,
    error,
    refetch,
    loading: !error && !data,
  };
};
export const fetcher = (path: string, target:string) => {
  return fetch(path)
  .then(handleErrorResponse(target))
  .then((res) => res.json());
};
