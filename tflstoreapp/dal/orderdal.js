//************************************ */
//a Separate responsibility  for  Flowers database crud operation
//DAL : Data Access Logic in this dal file
var sql = require('./mysqlconnect');

//model
//Object Oriented Approach
//define Model 
var Order = function(Order){

    //Constructor
    //orderid | orderdate  | custid | amount

    this.orderid=Order.orderid;
    this.orderdate = Order.orderdate;
    this.custid  = Order.custid ;
    this. amount  = Order.amount  ;
    
   };

//Attach member function to Model to perform DatABASE  CRUD operations

Order.createorder = function (neworder, result) {  
        console.log("New order to be added ...!!!");
        console.log(neworder);
        sql.query("INSERT INTO neworderss set ?", neworder, function (err, res) {
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

Order.getOrderById = function (OrderId, result) {
  sql.query("Select * from neworderss where orderid = ? ", OrderId, function (err, res) {             
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res);     
          }
      });   
};










Order.getAllorder = function (result) {
      console.log("Invoking dal getall order");
      
        sql.query("Select * from neworderss", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('neworderss : ', res);  
                  result(null, res);
                }
            });   
};


Order.updateById = function(id,Order,result){
  sql.query("UPDATE neworderss SET  amount = ? WHERE orderid = ?", [Order.amount, id], 
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






Order.remove = function(id, result){
    sql.query("DELETE FROM neworderss WHERE  orderid = ?", [id],
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

module.exports=Order;