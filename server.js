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




const express = require('express')  
const app = express()       // app express 
const port = 3000           // port

// Khai báo route
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log('Example app listening on port 3000:')
})