/**
 * Customize HTTP client, use Fetch instand of Axios
 */

export const fetcher = async <T>({
  url,
  method,
  params,
  data,
  headers,
  credentials
}: {
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch",
  params?: string| Record<string, string> | string[][],
  data?: BodyType<unkown>,
  headers?: HeadersInit,
  credentials?: RequestCredentials
}):Promise<T> => {
  const response = await fetch(`${url}${params}`, {
    method,
    credentials,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers,
    },
    ...(data? {body: JSON.stringify(data)}: {})
  });
  return response.json();
};

export default fetcher;