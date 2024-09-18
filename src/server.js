// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Đoạn trên là chưa dùng thêm framework express ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




const express = require('express')   // commonjs
const app = express()       // app express
require('dotenv').config()   // Câu lệnh này để sử dụng dotenv

// const port = 3000           // port   ==> hardcode 
const port = process.env.PORT || 3000 ;  // Dùng hai dấu hoặc để nếu cái PORT bị undefined thì còn có cái 3000
const path = require('path')    // cách để sử dụng 1 thư viện    // commonjs
const hostname = 'localhost'

//config template engine
//app.set('view', './views/')      // './src/views'  khi mà cái server này nằm ngoài src        ==> Sau đấy ta thêm 1 dấu gạch để nó tìm kiếm TRONG thư mục view.
app.set('views', path.join(__dirname, 'views'));                     //path.join giúp t tìm đc đường dẫn đến 1 file trực tiếp (và nó là 1 thư viện)
app.set('view engine', 'ejs')



// console.log(">>> check env: ", process.env);

//config static files
//app.use(express.static('public'))     cái này bị lỗi
app.use(express.static(path.join(__dirname, 'public')));


// Khai báo route
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/dat', (req, res) => {
  // res.send('<h1>DAT</h1>')
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log('Example app listening on port 3000:')
})