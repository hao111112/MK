const express = require("express");
const path = require("path");
const app = express();
app.use(express.static('metakeeperx'))
app.get("/",(req,res)=>{
    res.sendFile(path.join( __dirname + "/metakeeperx/html/home.html"));
})
app.get("/gamepass.html",(req,res)=>{
    res.sendFile(path.join( __dirname + "/metakeeperx/html/gamepass.html"));
})
app.get("/nft.html",(req,res)=>{
    res.sendFile(path.join( __dirname + "/metakeeperx/html/nft.html"));
})

app.get("/home.html",(req,res)=>{
    res.sendFile(path.join( __dirname + "/metakeeperx/html/home.html"));
})
const server = app.listen(8082, () => {
    const portNumber = server.address().port;
    console.log( `port is open on ${portNumber}` );
});