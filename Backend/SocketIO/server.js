// import {Server} from  "socket.io";
// import http from "http";
// import express from "express";

// const app = express()

// const server = http.createServer(app);  // Server = createServer  we are making the server
// const io = new Server(server,{
//     cors:{
//         origin: "http://localhost:3001",
//         methods: ["GET", "POST"],
//     }
// })

// // for real time message 
// export const getReceiverSocketId=(receiverId)=>{
//     return users[receiverId];
// }

// const users={};

// io.on("connection",(socket)=>{
//     console.log("a user connected",socket.id);

//     const userId=socket.handshake.query.userId // getting the usesrId from AUth which we also declared in SocketContext from AuthProvicer
//     if(userId){
//         users[userId]=socket.id; //making key value pair something like that object main store hua
//         console.log("Users : ",users);
//         // console.log(userId);
//     }

//     io.emit("getOnlineUsers",Object.keys(users));

//     socket.on("disconnect",()=>{
//         console.log("a user disconnected",socket.id);
//         delete users[userId];
//         io.emit("getOnlineUsers",Object.keys(users));
//     });

// });

// export {app,io,server};

import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

// realtime message code goes here
export const getReceiverSocketId = (receiverId) => {
  return users[receiverId];
};

const users = {};

// used to listen events on server side.
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId) {
    users[userId] = socket.id;
    console.log("Hello ", users);
  }
  // used to send the events to all connected users
  io.emit("getOnlineUsers", Object.keys(users));

  // used to listen client side events emitted by server side (server & client)
  socket.on("disconnect", () => {
    console.log("a user disconnected", socket.id);
    delete users[userId];
    io.emit("getOnlineUsers", Object.keys(users));
  });
});

export { app, io, server };