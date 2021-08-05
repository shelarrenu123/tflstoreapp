//************************************ */
//a Separate responsibility  for  Flowers database crud operation
//DAL : Data Access Logic in this dal file
var sql = require('./mysqlconnect');

//model
//Object Oriented Approach
//define Model 
var Customer = function(Customer){

    //Constructor
// custid | custfname | custlname | custemail         | custcontctno |
    this.custid=Customer.custid;
    this.custfname = Customer.custfname;
    this.custlname  = Customer.custlname ;
    this. custemail  = Customer. custemail  ;
    this.custcontctno  = Customer.custcontctno ;
   };

//Attach member function to Model to perform DatABASE  CRUD operations

Customer.createCustomer = function (newCustomer, result) {  
        console.log("New Customer to be added ...!!!");
        console.log(newCustomer);
        sql.query("INSERT INTO custom set ?", newCustomer, function (err, res) {
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

Customer.getCustomerById = function (CustomerId, result) {
        sql.query("Select * from custom where custid = ?", CustomerId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


Customer.getAllCustomer = function (result) {
      console.log("Invoking dal getall Customers");
      
        sql.query("Select * from custom", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('custom : ', res);  
                  result(null, res);
                }
            });   
};
//???
Customer.updateById = function(id, Customer, result){

  sql.query("UPDATE custom SET custfname = ? WHERE custid = ?", [Customer.custfname, id], 
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


Customer.remove = function(id, result){
    sql.query("DELETE FROM custom WHERE custid = ?", [id],
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

module.exports=Customer;

