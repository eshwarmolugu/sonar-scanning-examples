const express = require("express");
const app = express();
const port = 3000;


app.get("/", function(req,res){
  res.send("Hellow World");
});

app.listen(port, function(){
 console.log(`Example program for testing, app is listening on port ${port}|`);
});
