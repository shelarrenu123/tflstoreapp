


var flowerController=require("./controller/flowercontrol");
var orderController=require("./controller/ordercontrol");
var orderdetailController=require("./controller/orderdetailcontrol");
 var customerController=require("./controller/customercontrol");




module.exports=function(app){
          
      app.route("/api/custom")              
      .get(customerController.getAll)             
     .post(customerController.insert);         
  
       app.route('/api/custom/:id')
      .get(customerController.getBy)           
      .put(customerController.update)          
      .delete(customerController.remove);      
      
    

    app.route("/api/neworderss")              
    .get(orderController.getAll)            
    .post(orderController.insert);         

    app.route('/api/neworderss/:id')
    .get(orderController.getBy)           
    .put(orderController.update)          
   .delete(orderController.remove);      

     app.route("/api/folwer")              
    .get(flowerController.getAll)            
    .post(flowerController.insert);    

    app.route('/api/folwer/:id')
    .get(flowerController.getBy)           
    .put(flowerController.update)          
     .delete(flowerController.remove);      
    

    app.route("/api/orderdetail")              
   .get(orderdetailController.getAll)             
   .post(orderdetailController.insert);         

    app.route('/api/orderdetail/:id')
    .get(orderdetailController.getBy)           
    .put(orderdetailController.update)          
    .delete(orderdetailController.remove);      


    
    
};


 
