const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken');

const secret = 'fateriddle'

router.post('/',(req,res) => {
  console.log(req.body);
  const { username,password } = req.body
  console.log(username,password);
  if(!(username === 'fate' && password === 'fate')){
    res.redirect(401,'../wrong')
    return
  }

  const profile = {
    username,
    password,
    id: 123,
  }

  const token = jwt.sign(profile, secret)
  console.log(token);
  res.json({ token })
})

module.exports = router;
