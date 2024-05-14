const express = require('express');
const path = require('path');

let app = express();
let publicPath = path.join(__dirname, 'public');

app.get('/',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/contact',(req,res)=>{
    res.sendFile(`${publicPath}/contact.html`);
});

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});

app.listen(3000);