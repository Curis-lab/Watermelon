import { useEffect } from "react";
import io from "socket.io-client";
import UserList from "../../organisms/ChatAndNetwork/UserList";
import { ChatWrapper, LayoutWrapper, ListOfUserWrapper } from "./ChatAndNetwork.styled";


const socket = io("http://localhost:3000");

const ChatAndNetwork = () => {
  useEffect(() => {
    const connectSocket = () => {
      socket.on("connect", () => {
        console.log("Connected to server");
      });
    };
    connectSocket();

    return () => {
      socket.off("connect");
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = e.currentTarget.elements[0].value;
    socket.emit("message", 'hello');
    console.log("Message sent:", message);
  };

  return (
    <LayoutWrapper>
      <ListOfUserWrapper>
        <UserList/>
      </ListOfUserWrapper>
      <ChatWrapper>Chat</ChatWrapper>
    </LayoutWrapper>
  );
};

export default ChatAndNetwork;
