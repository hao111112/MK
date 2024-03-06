const express = require("express");
const path = require("path");
const app = express();

app.get("/",(req,res)=>{
    res.sendFile(path.join( __dirname + "/nft.html"));
})
const server = app.listen(8081, () => {
    const portNumber = server.address().port;
    console.log( `port is open on ${portNumber}` );
});