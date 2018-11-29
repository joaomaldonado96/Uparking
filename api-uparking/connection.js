var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "uparking"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connecto con la base de datos");
});

module.exports=con;