import io from "socket.io-client";

// const depoly_network = 'event-2-h3bg.onrender.com';
const dev_network = 'localhost:3000';
export const socket = io(`ws://${dev_network}`, {
  reconnectionDelay: 10000,
  reconnectionDelayMax: 50000,
});
