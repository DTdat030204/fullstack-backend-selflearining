const path = require('path');
const express = require('express');

// console.log(">>> check_dirname: ", __dirname)                          đây chính là sự khác biệt giữa __dirname và ./.../...
const configViewengine = (app) => {
    app.set('views', path.join('./src', 'views'));              
    app.set('view engine', 'ejs');
    
    // app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewengine; 
// Chúng t sẽ sử dụng thằng này bên file server.js nên ở đây t phải export nó ra để sử dụng 
// (Nếu có dấu() thì tức là nó đang THỰC THI HÀM, vì vậy phải ko dùng dấu đó)