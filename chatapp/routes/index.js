'use strict';
//サーバ側
const express = require('express');
const router = express.Router();
//const userName = request.body.userName;

// ログイン画面の表示
router.get('/', function(request, response, next) {
    response.render('index');
});

// チャット画面の表示
router.post('/room', function(request, response, next) {
    console.log('ユーザ名：' + request.body.userName); //ターミナルに表示されるconsole
    response.render('room',{userName: request.body.userName});
});


module.exports = router;
