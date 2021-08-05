//************************************ */
//a Separate responsibility  for  Flowers database crud operation
//DAL : Data Access Logic in this dal file
var sql = require('./mysqlconnect');

//model
//Object Oriented Approach
//define Model 
var Orderdetail = function(orderdetail){

    //Constructor
//orderdetailid | orderid | flowerid | orderquantity
    this.orderdetailid=orderdetail.orderdetailid;
    this.orderid = orderdetail.orderid;
    this.flowerid = orderdetail.flowerid;
    this.orderquantity = orderdetail.orderquantity;
   };

//Attach member function to Model to perform DatABASE  CRUD operations

Orderdetail.createdetail = function (newdetail, result) {  
        console.log("New orderdetail to be added ...!!!");
        console.log(newdetail);
        sql.query("INSERT INTO orderdetail set ?", newdetail, function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  console.log(res.insertId);
                  result(null, res.insertId);
                }
            });           
};

Orderdetail.getdetailById = function (orderId, result) {
        sql.query("Select * from orderdetail where  orderdetailid = ?", orderId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


Orderdetail.getAlldetail = function (result) {
      console.log("Invoking all getall deatail");
      
        sql.query("Select * from orderdetail", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('orderdetail: ', res);  
                  result(null, res);
                }
            });   
};

Orderdetail.updateById = function(id, Orderdetail, result){

  sql.query("UPDATE orderdetail SET orderquantity = ? WHERE  orderdetailid = ?", [Orderdetail.orderquantity, id], 
              function (err, res) {
                  if(err) {
                        console.log("error: ", err);
                        result(null, err);
                    }
                  else{   
                    result(null, res);
                    }
                }); 
};






Orderdetail.remove = function(id, result){
    sql.query("DELETE FROM orderdetail WHERE  orderdetailid = ?", [id],
                function (err, res) {
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                      result(null, res);
                  }
            }); 
};

module.exports=Orderdetail;