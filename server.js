var express = require('express');
var app = express();
var mysql = require('mysql');
app.use(express.static('public'));

//app.use(express.static('public'));
//var bodyParser = require('bodyParser');

// 

//app.use(bodyParser.urlencoded({extended: false}));



/*
// This responds with displaying the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.sendFile( __dirname + "/" + "index.html" );
});
*/

var ob_mysql=[
   {
     host: '127.0.0.1',
     user: 'root',
     password: '',
     database: 'ias'
   },
   {
     host: '185.224.138.112',
     user: 'u442399508_user_po',
     password: 'Tubig5115',
     database: 'u442399508_po'
   }
 ]
 
 var con = mysql.createConnection(ob_mysql[0]);
 
 con.connect((err) => {
   if(err){
     console.log('Error connecting to Db');
     return;
   }
   console.log('Connection established');
   
 });

// routes
var route_custmast='/api/getall_custmast';
app.get(route_custmast, function(req, res){
   console.log('GET request received at '+route_custmast); 
   con.query("SELECT * FROM custmast", function (err, result) {
       if (err) throw err;
       else{
           res.send(result)
       }

   });
});

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
});

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
});


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

/*
const mysql = require('mysql');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values

const ob=[
  {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'ias'
  },
  {
    host: '185.224.138.112',
    user: 'u442399508_user_po',
    password: 'Tubig5115',
    database: 'u442399508_po'
  }
]

const con = mysql.createConnection(ob[0]);

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
  
});


con.query('SELECT * FROM custmast', (err,rows) => {
    if(err) throw err;
  
    //console.log('Data received from Db:');
    //console.log(rows);
    //document.getElementById('btn_3').innerHTML=rows;
  });

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});

function fm_getDB(){
   con.query('SELECT * FROM custmast', (err,rows) => {
     if(err) throw err;
   
     console.log('Data received from Db:');
     console.log(rows);
   });
 }
*/
