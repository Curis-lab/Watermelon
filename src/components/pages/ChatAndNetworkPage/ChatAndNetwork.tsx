import { useEffect, useState } from "react";
import UserList from "../../organisms/ChatAndNetwork/UserList";
import {
  ChatWrapper,
  LayoutWrapper,
  ListOfUserWrapper,
} from "./ChatAndNetwork.styled";
import { useFormActivity } from "../../../hooks/useFormActivity";
import { socket } from "../../../server";

const ChatAndNetwork = () => {
  const [id, setId] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const initialState = {
    message: "",
  };
  const { handleChange, handleSubmit, formData } =
    useFormActivity(initialState);

  useEffect(() => {
    const connectSocket = () => {
      socket.on("connect", () => {
        setId(`You connected with id: ${socket.id}`);
      });
      socket.on('messages',(data)=>{
        console.log(data);
        // setMessages(p=>[...p, data]);
      })
    };
    connectSocket();

    // return () => {
    //   socket.off("connect");
    // };
  }, []);

  const submitCallback = async () => {
    socket.emit("message", formData.message);
    return "hello";
  };
  return (
    <LayoutWrapper>
      <ListOfUserWrapper>
        <UserList />
      </ListOfUserWrapper>
      <ChatWrapper>
        {id}
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
            {
              messages.map((message, idx)=>(

            <div key={idx}>
              <div
                style={{
                  padding: "7px 15px",
                  background: "gray",
                  color: "white",
                  maxWidth: "300px",
                  borderRadius: "10px",
                }}
                
              >
                {message}
              </div>
              <p>Today, 8:30PM</p>
            </div>
              ))
            }
          </div>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e, submitCallback)}
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
            value={formData.message}
            onChange={handleChange}
            name="message"
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
            type="submit"
            // onClick={sendMessage}
          >
            Send
          </button>
        </form>
        <form
          onSubmit={(e) => handleSubmit(e, submitCallback)}
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
            value={formData.message}
            onChange={handleChange}
            name="room"
            placeholder="Room..."
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
            type="submit"
            // onClick={sendMessage}
          >
            {">"}
          </button>
        </form>
      </ChatWrapper>
    </LayoutWrapper>
  );
};

export default ChatAndNetwork;
