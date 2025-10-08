// import { useEffect, useState } from "react";
// import UserList from "../../organisms/ChatAndNetwork/UserList";
// import {
  // ChatWrapper,
  // LayoutWrapper,
  // ListOfUserWrapper,
// } from "./ChatAndNetwork.styled";
// import { useFormActivity } from "../../../hooks/useFormActivity";
// import { socket } from "../../../server";
import ChatAndNetworkTemplate from "../../templates/ChatAndNetworkTemplate/ChatAndNetworkTemplate";

// interface FormData {
//   message: string;
//   room: string;
// }

const ChatAndNetwork = () => {
  // const [id, setId] = useState<string>("");
  // const [messages, setMessages] = useState<string[]>([]);
  // const initialState: FormData = {
  //   message: "",
  //   room: "",
  // };
  // const { handleChange, handleSubmit } = useFormActivity(initialState);

  // useEffect(() => {
  //   const connectSocket = () => {
  //     socket.on("connect", () => {
  //       setId(`You connected with id: ${socket.id}`);
  //     });
  //     socket.on('messages',(data)=>{
  //       console.log(data);
  //       setMessages(p=>[...p, data]);
  //     })
  //   };
  //   connectSocket();

  //   return () => {
  //     socket.off("connect");
  //     socket.off("messages");
  //   };
  // }, []);

  // const submitCallback = async () => {
    // socket.emit("message", 'hello');
  // };

  return (
    <ChatAndNetworkTemplate/>
  );
};

export default ChatAndNetwork;
