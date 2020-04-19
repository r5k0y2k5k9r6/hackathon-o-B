'use strict';

module.exports = function (server) {

    const socketIo = require('socket.io')(server, { wsEngine: 'ws' });
    const io = socketIo.listen(server);

    io.sockets.on('connection', function (socket) {
        // 投稿モジュールの呼出
        require('./publish')(socket, io);

        // 入室モジュールの呼出
        require('./enter')(socket);

        // 退室モジュールの呼出
        require('./exit')(socket);

        socket.on('sendMessageEvent', function (data) {
          if (!data) {
            return;
          }

          console.log('クライアントの入力値:' + data );

          io.sockets.emit('receiveMessageEvent', data);
        });

    });
};
