//**************************** */
//a Separate responsibility  for  Flowers  HTTP request handling

var Detail = require('../dal/orderdetaildal');

exports.getAll = function(req, res) {
  console.log("calling controller function....!!!");
  Detail.getAlldetail(function(err, detail) {  //invoking this fun from flowersDal file
    if (err)
      res.send(err);
    res.send(detail);
  });
};

exports.insert = function(req, res) {
  var new_detail = new Detail(req.body);
  console.log(new_detail.body); //print at console

  //handles null error 
   if(!new_detail.orderid || !new_detail.orderquantity){
      res.status(400).send({ error:true, message: 'Please provide Customer/status' });
    }
   else{
    Detail.createdetail(new_detail, function(err, detail) {
      if (err)
      res.send(err);
    res.json(detail);
    });
  }
};

exports.getBy = function(req, res) {
  Detail.getdetailById(req.params.id, function(err, detail) {
    if (err)
      res.send(err);
    res.json(detail);
  });
};

exports.update = function(req, res) {
  Detail.updateById(req.params.id, new Customer(req.body), function(err,detail) {
    if (err)
      res.send(err);
    res.json(detail);
    console.log("Customer data field is updated...!!!");
  });
};

exports.remove = function(req, res) {
  Detail.remove( req.params.id, function(err,detail) {
    if (err)
      res.send(err);
    res.json({ message: 'Customer successfully deleted' });
    console.log("customer is deleted..!!");
  });
};