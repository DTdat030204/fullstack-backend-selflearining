const express = require('express');

const getHomepage = (req, res) => {
    res.send('Hello word from controllers')
}


const getDat = (req, res) => {
    // res.send('<h1>DAT</h1>')
  res.render('sample.ejs')
}

// cái này sẽ export ra nhiều biến nên nó sẽ dùng cái export objects. Và nó phải export chung như thế này chứ ko sẽ bị lỗi 
// hình như ko thể chia export ra đâu, mà phải ghi như này
module.exports = {
    getHomepage, getDat
}
