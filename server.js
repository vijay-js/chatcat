'use strict';

const express = require('express');
const app = express();
app.set('port' , process.env.PORT || 3000);


let Middleware = (req,res,next) => {
    req.hello = "Booyah!";
    next();
}

app.use(Middleware);

app.get('/', (req,res,next) => {
    res.send('<h1>Hello Express '+req.hello+ '</h1>');
});

app.get('/dashboard', (req,res,next) => {
    res.send('<h1>This is dashboard ' +req.hello+'</h1>');
});
app.listen(app.get('port'), ()=> console.log("ChatCat running on Port 3000"));