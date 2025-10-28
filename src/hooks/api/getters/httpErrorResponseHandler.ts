import { ResponseError } from "../../../utils/apiUtils";

const handleErrorResponse = (target: string) => async (res: Response) => {
  if (!res.ok) {
    throw new ResponseError(target, res.status, await parseErrorResponse(res));
  }
  return res;
};

const parseErrorResponse = async (res: Response) => {
  try {
    return await res.json();
  } catch {
    return res.statusText;
  }
};

export default handleErrorResponse;
