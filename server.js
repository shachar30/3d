var express = require('express');
var bodyParser=require('body-parser');
var morgan=require("morgan");

var app = express();



app.use(bodyParser.urlencoded({extended:true})); ///can be photo 'viedo'
app.use(bodyParser.json()); //work on json file
app.use(morgan('dev')); //wirte req to the console


app.use('/',express.static('./public'));


app.get('*',function(req,res){

	res.sendFile(__dirname + '/index.html');

});

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

app.use(myLogger);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/log', function (req, res) {
  res.send('Hello World!');
});


app.listen(3300);