'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitEavent', function (data) {
      if(!data){
        console.log('Exit Client: NULL');
        return;
      }
      console.log('Exit Client:'+ data);
      // const message = prompt(data +'さんが退室しました\n');
      socket.broadcast.emit('receiveExitEvent',data +'さんが退室しました');
    });
};
