const express = require('express');
const bodyparser = require("body-parser");
const port = 3012;
const app = express();


app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST'); /*on donne l'access du delete put get post*/
  next();
});



const auth = require('./Server/Routes/auth')
app.use('/auth',auth);

const todo = require('./Server/Routes/todo')
app.use('/todo',todo);

app.use(express.static(__dirname + "/dist/Application-todo/index.html"));

app.get('**',(req,res)=>{
  res.sendFile(__dirname+"/dist/Application-todo/index.html");
});


app.listen(port, err=>{
    if (err) throw err;
    console.log(`the server is running on port ${port}`)
});
