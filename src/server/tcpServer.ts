import io from "socket.io-client";

export const socket = io("ws://localhost:5001", {
  reconnectionDelay: 10000,
  reconnectionDelayMax: 50000,
});
