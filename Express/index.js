const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();

app.use(parser.urlencoded({extended: false}));

app.get("/employee/create", (req,res) =>{
    var loc = path.join(__dirname, 'views', 'index.html');
    res.sendFile(loc);
});

app.post("/employee/create",(req,res) =>{
   console.log(req.body.name);
   res.json(req.body);
});

app.listen(80);
