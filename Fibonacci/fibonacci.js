var express = require('express'); 
var router = express.Router(); 
var math = require('../math'); 
  
/* GET users listing. */ 
router.get('/', function(req, res, next) { 
  if (req.query.fibonum) { 
  res.render('fibonacci', { 
  title: 'Calculate Fibonacci Numbers', 
  fibonum: req.query.fibonum, 
  fiboval: math.fibonacci(req.query.fibonum) 
  }); 
  } else { 
  res.render('fibonacci', { 
  title: 'Calculate Fibonacci Numbers', 
  fiboval: undefined 
  }); 
  } 
  
}); 
  
module.exports = router; 