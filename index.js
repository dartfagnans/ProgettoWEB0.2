var express = require('express');
var bodyParser = require('body-parser');
const server = express();

const port = 3000;

server.set ('view engine', 'ejs');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('public'));

server.get('/', function(req, res) {
    res.render('home');
});

server.listen(port, function() {
    console.log('in ascolto sulla porta ' + port);
});