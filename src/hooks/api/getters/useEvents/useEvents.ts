import { formatPath } from "../../../../utils/formatPath";
import { fetcher, useApiGetter } from "../useApiGetter/useApiGetter";


//! this any type is comming form openapi-ts
export const useEvent = ()=>{
    const PATH = '/events';
    const {data, refetch, loading, error} = useApiGetter<any>(formatPath(PATH),()=>fetcher(formatPath(PATH), 'Get Events'));
    return {
        events: data,
        refetch,
        error,
        loading
    }
}