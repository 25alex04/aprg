// Initialisierung des Webservers
const express = require('express');
const app = express();

//Webserver starten
app.listen(3000, function() {
    console.log('Webserver is running and listening on port 3000');
});

app.get('/hello', function(req, res){
    res.send('Hello World!');
})

app.get('/about42', function(req, res) {
    res.sendFile(__dirname + "/public/about.html");
});

app.use(express.static(__dirname + '/public'));