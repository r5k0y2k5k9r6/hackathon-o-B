'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data) {
      if (!data) {
        return;
      }

      console.log('クライアントの入力値:' + data );

      socket.emit('receiveMyMessageEvent', data);
      socket.broadcast.emit('receiveMessageEvent', data);
    });
};
