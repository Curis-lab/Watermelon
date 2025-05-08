import net from "node:net";

interface PlayerScore {
  id: string;
  score: number;
  lastUpdated: Date;
}

interface Message {
  type: "score_update" | "chat" | "system";
  payload: any;
}

let playerScores: PlayerScore[] = [];
const clients: net.Socket[] = [];

function broadcast(message: Message, excludeSocket?: net.Socket) {
  const messageStr = JSON.stringify(message) + "\n";
  clients.forEach((client) => {
    if (client !== excludeSocket && !client.destroyed) {
      client.write(messageStr);
    }
  });
}

function handleData(data: Buffer, socket: net.Socket) {
  try {
    const messageStr = data.toString().trim();
    const message: Message = JSON.parse(messageStr);

    switch (message.type) {
      case "score_update":
        const { id, score } = message.payload;
        const existingScore = playerScores.find((p) => p.id === id);
        if (existingScore) {
          existingScore.score = score;
          existingScore.lastUpdated = new Date();
        } else {
          playerScores.push({
            id,
            score,
            lastUpdated: new Date(),
          });
        }
        broadcast(message);
        break;

      case "chat":
        broadcast(message);
        break;

      case "system":
        console.log("System message:", message.payload);
        break;

      default:
        console.warn("Unknown message type:", message.type);
    }
  } catch (error) {
    console.error("Error handling message:", error);
    socket.write(
      JSON.stringify({
        type: "system",
        payload: { error: "Invalid message format" },
      }) + "\n"
    );
  }
}

function handleConnection(socket: net.Socket) {
  clients.push(socket);
  console.log("Client connected", socket.remoteAddress, socket.remotePort);

  // Send current scores to new client
  socket.write(
    JSON.stringify({
      type: "system",
      payload: { scores: playerScores },
    }) + "\n"
  );

  socket.on("data", (data) => handleData(data, socket));
  socket.on("error", (error) => {
    console.error("Socket error:", error);
  });
  socket.on("close", () => {
    const index = clients.indexOf(socket);
    if (index > -1) {
      clients.splice(index, 1);
    }
    console.log("Client disconnected", socket.remoteAddress, socket.remotePort);
  });

  socket.setEncoding("utf8");
}

const server = net.createServer(handleConnection);

server.on("error", (error) => {
  console.error("Server error:", error);
});

server.listen(5001, () => {
  console.log("TCP server listening on port 5001");
});
