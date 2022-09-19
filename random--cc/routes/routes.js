const random = require('/home/tectoro/Desktop/random--cc/controller/random.js');

const router = require("express").Router();
router.post('/save', random.add);

module.exports = router;