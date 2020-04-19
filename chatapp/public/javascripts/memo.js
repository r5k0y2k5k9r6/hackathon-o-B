'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    /* (変更前) メモの内容を表示
    $('#thread').prepend('<p>' + userName + `さんのメモ:` + message +'</p>');
    return false; */

  /*以下改変
  投稿欄が空白，改行，スペース(半角及び全角)のみの時は投稿できなくする
  */
    const sendmessage = message.replace(/\r?\n/g, '<br>');
    if(message === '' || message === '\n' || message === ' ' || message === '　') {
      alert('メモを入力してください');
      return false;
    } else {
        $('#thread').prepend('<p>' + userName + `さんのメモ: ` + sendmessage +'</p>'); //メッセージ表示
         //投稿欄の文字削除
        $('#message').val('');
        this.searchform.searchbox.value="";
        return false;
    }
}
