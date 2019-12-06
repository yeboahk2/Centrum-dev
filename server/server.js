const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;
var mongoUri = "hello"

//middleware
app.use(bodyParser.json());
app.use(cors());

//Handle Production 
if(process.env.NODE_ENV == 'production') {
    app.use(express.static(__dirname + '/public/'))
    app.get(/.*/, function(req, res) {res.sendFile(__dirname + '/public/index.html')})
}

//initialize server
app.listen(port, function () {
    console.log("Server started on port: " + port);
});