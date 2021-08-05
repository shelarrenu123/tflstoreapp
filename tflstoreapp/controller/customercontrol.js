//**************************** */
//a Separate responsibility  for  Flowers  HTTP request handling

var Customer = require('../dal/customerdal');

exports.getAll = function(req, res) {
  console.log("calling controller function....!!!");
  Customer.getAllCustomer(function(err, customer) {  //invoking this fun from flowersDal file
    if (err)
      res.send(err);
    res.send(customer);
  });
};

exports.insert = function(req, res) {
  var new_Customer = new Customer(req.body);
  console.log(new_Customer.body); //print at console

  //handles null error 
   if(!new_Customer.custfname || !new_Customer.custid){
      res.status(400).send({ error:true, message: 'Please provide Customer/status' });
    }
   else{
    Customer.createCustomer(new_Customer, function(err, customer) {
      if (err)
      res.send(err);
    res.json(customer);
    });
  }
};

exports.getBy = function(req, res) {
  Customer.getCustomerById(req.params.id, function(err, customer) {
    if (err)
      res.send(err);
    res.json(customer);
  });
};

exports.update = function(req, res) {
  Customer.updateById(req.params.id, new Customer(req.body), function(err, customer) {
    if (err)
      res.send(err);
    res.json(customer);
    console.log("Customer data field is updated...!!!");
  });
};

exports.remove = function(req, res) {
  Customer.remove( req.params.id, function(err, customer) {
    if (err)
      res.send(err);
    res.json({ message: 'Customer successfully deleted' });
    console.log("customer is deleted..!!");
  });
};



