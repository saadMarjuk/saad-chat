const express =require('express');
const app =express();
const http =require('http');
const expressServer= http .createServer(app);
const {Server}=require('socket.io');
const io=new Server(expressServer);

io.on('connection',function(socket){
    console.log("user connected")
    socket.on('chat' ,function(msg)
  {
    io.emit('chat_transfer',msg)
  })
  
    
  })

app.get('/',function(req,res){
   res.sendFile(__dirname+"/index.html")
  })
expressServer.listen(3000,function(){
    console.log("server run at @3000");
})