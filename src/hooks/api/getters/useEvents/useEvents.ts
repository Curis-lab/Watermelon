import { formatPath } from "../../../../utils/formatPath";
import { fetcher, useApiGetter } from "../useApiGetter/useApiGetter";
import { SWRConfiguration } from "swr"; // Assuming SWRConfiguration is imported from 'swr'

//! this any type is comming form openapi-ts
export const useEvent = () => {
  //what I should do
  const PATH = "/events";
  const options: SWRConfiguration = {}; // Define options as needed
  const { data, refetch, loading, error } = useApiGetter<any>(
    formatPath(PATH),
    () => fetcher(formatPath(PATH), "Get Events"),
    options
  );

  return {
    events: data,
    refetch,
    error,
    loading,
  };
};
