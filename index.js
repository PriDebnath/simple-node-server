let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods","GET, HEAD, OPTIONS, POST, PUT, DELETE")
  res. header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization")
  next();
    
})


app.get("", (req, res) => {
  console.log("client came");
  res.header("Access-Control-Allow-Origin", "*")
  res.status(200).send("<h1>You can access the data</h1>")
});

 
let port = process.env.PORT ||  8000;
let address = process.env.HOSTNAME || "localhost"


app.listen(port,address , (err) => {
  console.log("Running on ",address, port,err);
    if (err) throw new Error(err)
});