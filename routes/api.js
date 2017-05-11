const express = require('express');
const router = express.Router()

router.get('/something',(req,res) => {
  console.log(req.user);
  res.json(req.user)
})


module.exports = router
