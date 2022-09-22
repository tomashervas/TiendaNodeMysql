var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json('Todos los clientes');
});


module.exports = router;