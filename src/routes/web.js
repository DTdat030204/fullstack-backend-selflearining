const express = require('express');
const router = express.Router();


// Khai báo route
router.get('/Hello', (req, res) => {
  res.send('Hello World')
})

router.get('/dat', (req, res) => {
  // res.send('<h1>DAT</h1>')
  res.render('sample.ejs')
})



module.exports = router  // export default