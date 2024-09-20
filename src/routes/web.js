const express = require('express');
const { getHomepage, getDat } = require('../controllers/homeController');
const router = express.Router();
//const { getDat } = require('../controllers/homeController'); // Nó cùng đường link nên có thể viết lên trên kia như vậy luôn

// KHAI BÁO ROUTER


// CÁI NÀY GỌI LÀ FUNCTION HANDLER


// router.get('/hello', (req, res) => {
//   res.send('Hello World')
// })

router.get('/hello', getHomepage);

// router.get('/dat', (req, res) => {
//   // res.send('<h1>DAT</h1>')
//   res.render('sample.ejs')
// })

router.get('/dat', getDat);



module.exports = router  // export default