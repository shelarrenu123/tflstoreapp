//a Separate responsibility  for  Flowers database crud operation
var sql = require('./mysqlconnect');

//model
//Object Oriented Approach
//define Model 
var Flower = function(Flower){
// id   | title | discription  | quantity | unitprice | likes |
    //Constructor

    this.id=Flower.id;
    this.title = Flower.title;
    this.discription = Flower.discription;
    this.quantity = Flower.quantity;
    this.unitprice = Flower.unitprice;  
    this.likes=Flower.likes;
};

//Attach member function to Model to perform DatABASE  CRUD operations

Flower.createFlower = function (newFlower, result) {  
        console.log("New flower to be added ");
        console.log(newFlower);
        sql.query("INSERT INTO folwer set ?", newFlower, function (err, res) {
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
// id   | title | discription  | quantity | unitprice | likes |
Flower.getFlowerById = function (FlowerId, result) {
        sql.query("Select * from folwer where Id = ? ", FlowerId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};

//rest api means function run serverside
Flower.getAllFlower = function (result) {
      console.log("Invoking dal getall Flowers");
      
        sql.query("Select * from folwer", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('folwer : ', res);  
                  result(null, res);
                }
            });   
};

Flower.updateById = function(id,Flower,result){

  sql.query("UPDATE folwer SET title = ? WHERE id = ?", [Flower.title, id], 
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


Flower.remove = function(id, result){
    sql.query("DELETE FROM folwer WHERE id = ?", [id],
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

module.exports=Flower;