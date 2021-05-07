const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require("path");

let pathHtml = path.resolve(__dirname, "./public");

app.use(express.static(pathHtml));


app.get('/', (req, res) => {    
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get('/form-registro', function(req , res){
    let htmlPath = path.join(__dirname,'./views/form-registro.html' );
    res.sendFile(htmlPath);
});

app.get('/login', function(req , res){
    let htmlPath = path.join(__dirname,'./views/login.html' );
    res.sendFile(htmlPath);
});


app.listen(process.env.PORT || 3000, function () {
    console.log('Estoy corriendo en el puerto 3000');
})





