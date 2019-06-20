var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("get headers ==> ", req.headers)
  console.log("get body ==> ", req.body)

  res.send('get response OK');
});

router.post('/', function(req, res, next) {
  console.log("post headers ==> ", req.headers)
  console.log("post body ==> ", req.body)

  res.send('post response OK');
});

module.exports = router;
