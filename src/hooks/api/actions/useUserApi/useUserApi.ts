import useApi from "../useApi/useApi";

interface IUser {
  name: string;
  email: string;
  password: string;
}

export const useUserApi = () => {
  const PATH = "/authentication/register";
  const { createRequest, makeRequest, loading } = useApi();
  const addUser = async(user: IUser) => {
    const requestId = "addUser";
    const req = createRequest(
      PATH,
      {
        method: "POST",
        body: JSON.stringify(user),
      },
      requestId
    );
    const response = await makeRequest(req.caller, requestId);
    console.log(response);
  };

  const updateUser = (user: IUser) => {
    console.log(user);
    return null;
  };

  const deleteUser = (id: string) => {
    const requestId = "deleteUser";
    console.log(requestId, id);
  };

  return {
    addUser,
    updateUser,
    deleteUser,
    loading
  };
};
