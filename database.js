var mysql = require('mysql');  
var connection = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "",
  database: "users_details"  
});  
 

connection.query(`select * from card__filter`,(err,result)=>{
    if(err)
    {
      console.log("some error")
    }
    else{
      console.log(result)
    }
  })

  module.exports = connection;


  