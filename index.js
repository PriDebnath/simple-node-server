
/* @description 

    Starting a server with VANILLA NODE JS and then with EXPRESS

*/


// VANILLA NODE JS IMPLEMENTATION


const http = require("http");
const port = process.env.PORT ||  8000;
const hostname = process.env.HOSTNAME || "localhost"


const server = http.createServer(async (req, res) => {
  //set the request route
  if (req.url === "/" && req.method === "GET") {

      //response headers
      res.writeHead(200, { "Content-Type": "application/json" , "Access-Control-Allow-Origin": "*" }); 

      //set the response
      res.write("You successfully created a server using  Vanilla Node.js 🎉");

      //end the response
      res.end();
  }

  //  sending error if route not found 
  else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
  }
});


server.on("request", (request, res) => { 
  console.log("Got a client on server")
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



//  EXPRESS IMPLEMENTATION


/*

const port = process.env.PORT || 8000;
const address = process.env.HOSTNAME || "localhost"

const express = require("express");
const app = express();

// Adding a middleware to set default header
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});


app.get("/", (req, res) => {
  console.log("Got a client on server")

  res.status(200).send("<h1>You successfully created a server using express 🎉</h1>")

  // express automatically send error 404 if route not found
});


app.listen(port, address, (err) => {
  console.log("Running on ", address, port, err);
});

*/