// let express = require("express");
// let cors = require("cors");

// let app = express();
// app.use(cors());
// app.use((req,res,next)=>{
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Methods","GET, HEAD, OPTIONS, POST, PUT, DELETE")
//   res. header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization")
//   next();
    
// })


// app.get("", (req, res) => {
//   console.log("client came");
//   res.header("Access-Control-Allow-Origin", "*")
//   res.status(200).send("<h1>You can access the data</h1>")
// });

 
// let port = process.env.PORT ||  8000;
// let address = process.env.HOSTNAME || "0.0.0.0"


// app.listen(port,address , (err) => {
//   console.log("Running on ",address, port,err);
//     if (err) throw new Error(err)
// });



http = require("http");
let port = process.env.PORT ||  8000;
let hostname = process.env.HOSTNAME || "0.0.0.0"



const server = http.createServer(async (req, res) => {
  //set the request route
  if (req.url === "/" && req.method === "GET") {
      //response headers
      res.writeHead(200, { "Content-Type": "application/json" , "Access-Control-Allow-Origin": "*" });
      //set the response
      res.write("Hi there, This is a Vanilla Node.js API");
      //end the response
      res.end();
  }

  // If no route present
  else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
  }
});


server.on("request", (request, res) => {
  console.log("client on server")
 // res.end("Hello World! This is my first pure Node.js server");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});