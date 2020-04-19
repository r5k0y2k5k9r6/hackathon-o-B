'use strict';

// 投稿メッセージをサーバに送信する
//ユーザ名退避
var userNameData;
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    const sendmessage = message.replace(/\r?\n/g, '<br>');
    // 投稿内容を送信
　  //投稿した日時を取得
    const now = new Date();
    const year  = now.getFullYear();
    const month = now.getMonth()+1;
    const day   = now.getDate();
    const hour  = now.getHours();
    const min   = now.getMinutes()
    // 投稿内容を送信

    const userName_message = `${year}年${month}月${day}日${hour}時${min}分<br/>${userName}さん: ${sendmessage}`

  //投稿欄が空白，改行，スペース(半角及び全角)のみの時は投稿できなくする
  if(message === '' || message === '\n' || message === ' ' || message === '　') {
    alert('メッセージ入力してください');　
    return false;
  } else if(userNameData == userName) {
    //alert(userName);
  //  alert(userNameData);
    alert('連続した人が投稿することはできません');
  } else {
  //  alert(userName);
  //  alert(userNameData);
      userNameData = userName; //ここでuserNameData(undifiend)にuserNameが代入される
      socket.emit('sendMessageEvent', userName_message);
      return false;
  }
}
// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMyMessageEvent', function (data) {
    $('#thread').prepend('<p class="bold">' + data + '</p>');
    $('#message').val('');
});
//他の人
socket.on('receiveMessageEvent', function (data) {
  userNameData = '';
      $('#thread').prepend('<p>' + data + '</p>');　
});
