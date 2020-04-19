'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();
    // ユーザ名が未入力でないかチェックする
    if(userName !== '') {
      //alert(userName);
        $('form').submit();
    }
    else {
      alert('ユーザ名を入力してください');
    }
}


socket.on('receiveMessageEvent', function (data) {
  $('#thread').prepend('<p>' + data + '</p>');
});
