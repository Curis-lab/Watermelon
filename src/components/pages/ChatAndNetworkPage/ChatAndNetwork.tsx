import { useEffect, useState } from "react";
import io from "socket.io-client";
import UserList from "../../organisms/ChatAndNetwork/UserList";
import {
  ChatWrapper,
  LayoutWrapper,
  ListOfUserWrapper,
} from "./ChatAndNetwork.styled";

const socket = io("ws://localhost:5001", {
  reconnectionDelay: 10000,
  reconnectionDelayMax: 50000,
});

const ChatAndNetwork = () => {
  const [message, setMessage] = useState<string>("");
  
  useEffect(() => {
    const connectSocket = () => {
      socket.on("connect", () => {
        console.log("Connected to server");
      });
    };
    socket.on("message", (arg1, callback) => {
      console.log(arg1);
      //accept all messages
      callback("hello");
    });
    connectSocket();

    return () => {
      socket.off("connect");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("message", { message });
  };
  return (
    <LayoutWrapper>
      <ListOfUserWrapper>
        <UserList />
      </ListOfUserWrapper>
      <ChatWrapper>
        <div
          style={{
            width: "100%",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            padding: "5px 10px",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "gray",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <div
          style={{
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "5px",
              paddingBlock: "10px",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "gray",
              }}
            ></div>
            <div>
              <div
                style={{
                  padding: "7px 15px",
                  background: "gray",
                  color: "white",
                  maxWidth: "300px",
                  borderRadius: "10px",
                }}
              >
                How are you? what is your name of the root.
              </div>
              <p>Today, 8:30PM</p>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "100px",
            display: "flex",
            padding: "10px",
            gap: "5px",
            backgroundColor: "gray",
            borderRadius: "5px",
          }}
        >
          <input
            placeholder="Message..."
            type="text"
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "16px",
            }}
          />
          <button
            style={{
              height: "50px",
            }}
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </ChatWrapper>
    </LayoutWrapper>
  );
};

export default ChatAndNetwork;
