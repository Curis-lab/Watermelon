import { WebSocketServer } from "ws";
import net from "node:net";

const wss = new WebSocketServer({ port: 3000 });
const tcpClients = new Map();

wss.on("connection", (ws) => {
  console.log("WebSocket client connected");

  // Create TCP connection for this WebSocket client
  const tcpClient = new net.Socket();
  tcpClients.set(ws, tcpClient);

  tcpClient.connect(5001, "localhost", () => {
    console.log("TCP connection established");
  });

  // Handle messages from WebSocket client
  ws.on("message", (message) => {
    try {
      const data = message.toString();
      tcpClient.write(data + "\n");
    } catch (error) {
      console.error("Error forwarding message to TCP server:", error);
    }
  });

  // Forward TCP messages to WebSocket client
  tcpClient.on("data", (data) => {
    try {
      ws.send(data.toString());
    } catch (error) {
      console.error("Error forwarding message to WebSocket client:", error);
    }
  });

  // Handle disconnection
  ws.on("close", () => {
    console.log("WebSocket client disconnected");
    tcpClient.destroy();
    tcpClients.delete(ws);
  });

  tcpClient.on("error", (error) => {
    console.error("TCP connection error:", error);
    ws.close();
  });

  tcpClient.on("close", () => {
    console.log("TCP connection closed");
    ws.close();
  });
});

console.log("WebSocket proxy server running on port 3000");
