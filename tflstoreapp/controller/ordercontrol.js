//**************************** */
//a Separate responsibility  for  Flowers  HTTP request handling

var Order = require('../dal/orderdal');

exports.getAll = function(req, res) {
  console.log("calling controller function....!!!");
  Order.getAllorder(function(err, order) {  //invoking this fun from flowersDal file
    if (err)
      res.send(err);
    res.send(order);
  });
};

exports.insert = function(req, res) {
  var new_order = new Order(req.body);
  console.log(new_order.body); //print at console

  //handles null error 
   if(!new_order.amount || !new_order.orderid){
      res.status(400).send({ error:true, message: 'Please provide Customer/status' });
    }
   else{
    Order.createorder(new_order, function(err, order) {
      if (err)
      res.send(err);
    res.json(order);
    });
  }
};

exports.getBy = function(req, res) {
  Order.getOrderById(req.params.id, function(err,order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};



exports.update = function(req, res) {
  Order.updateById(req.params.id, new  Order(req.body), function(err,order) {
    if (err)
      res.send(err);
    res.json(order);
    console.log("Customer data field is updated...!!!");
  });
};

exports.remove = function(req, res) {
  Order.remove( req.params.id, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'Customer successfully deleted' });
    console.log("customer is deleted..!!");
  });
};