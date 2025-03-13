import { useEffect, useState } from "react";
import io from "socket.io-client";


const socket = io("http://localhost:5001", {
  transports: ["websocket"],
});

const ChatAndNetwork = () => {
  const [score, setScore] = useState({ value: 0 });
  const [data, setData] = useState();
  function connectSocket() {
    socket.on("connect", () => {
      console.log("connected to server");
    });
    socket.on("message", (data) => {
      console.log(data);
    });
    socket.emit("message", "hello there");
    socket.on('scores',(data)=>{
        setData(data)
    })
  }
  useEffect(() => {
    connectSocket();
  }, []);

  const onSubmit = () => {
    console.log(score);
    socket.emit('score', score);
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScore((prev) => ({ ...prev, ["value"]: Number(e.target.value) }));
  };

  
  return (
    <div>
      <h1>chat And network</h1>
      {
        JSON.stringify(data)
      }
      <input
        onChange={inputHandler}
        type="text"
        placeholder="Enter your name"
      />
      <input type="text" placeholder="Enter your score" />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default ChatAndNetwork;
