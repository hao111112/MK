const express = require("express");
const path = require("path");
const app = express();
app.use(express.static('metakeeperx'))
app.get("/",(req,res)=>{
    res.sendFile(path.join( __dirname + "/metakeeperx/html/nft.html"));
})
const server = app.listen(8081, () => {
    const portNumber = server.address().port;
    console.log( `port is open on ${portNumber}` );
});