const WebSocket = require("ws");
var number=1;
var CLIENTS=[];

const PORT = process.env.PORT | 5000;

//make/start server
var wss = new WebSocket.Server({ port: PORT });
console.log("runing")
wss.broadcast = function(data) {
    //sends data to all connecshons
    wss.clients.forEach(function(client) {
      
    client.send(data)
      
    })
  }

//lison for connecshions
wss.on("connection", ws => {
    console.log("New client connected!");
    ws.send(number);

    ws.on("message", data => {
        //console.log('client has sent us: '+String(data));
        number+=parseInt(data);
        console.log(parseInt(data));
        //ws.send(number);
        wss.broadcast(number);
    });

    ws.on("close", () => {
        console.log("client disconected!");
    });

});
