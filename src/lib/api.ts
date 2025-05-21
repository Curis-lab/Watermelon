import axios from "./axios";

export const fetchEvents = async () => {
  try {
    const response = await axios.get("/events");
    return response?.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    } else {
      console.log(error);
    }
  }
};


export const fetchEventById = async (eventId: string) => {
  try {
    const response = await axios.get(`/events/${eventId}`);
    return response?.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    } else {
      console.log(error);
    }
  }
};

interface RegisterProps {
  username: string;
  email: string;
  password: string;
  role: "mentor" | "attendee";
}

export const registerUser = async (userData: RegisterProps) => {
  try {
    const response = await axios.post("/authentication/register", userData);
    return response?.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    } else {
      console.log(error);
    }
  }
};
export const loginUser = async (credentials: {email:string, password:string}) => {
  try {
    const response = await axios.post("/auth/login", credentials);
    return response?.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    } else {
      console.log(error);
    }
  }
};
export const getSingleUser = async () => {
  try {
    const response = await axios.get("/api/user");
    console.log('this is reponse for',response)
    return response?.data.user;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    } else {
      console.log(error);
    }
  }
};

