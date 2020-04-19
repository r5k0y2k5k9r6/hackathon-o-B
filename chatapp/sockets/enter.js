'use strict';

module.exports = function (socket, io) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendEnterEavent', function (data) {
      if(!data){
        return;
      }
      console.log('Enter Client:'+ data);
            // const message = prompt(data +'さんが入室しました\n');
            socket.broadcast.emit('receiveEnterEvent',data + 'さんが入室しました');
    });
};
