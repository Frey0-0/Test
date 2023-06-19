var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('haan bhai chal gya')
});

module.exports = router;
