// fsモジュールを取り込む
const fs = require('fs');

// ファイルを読み込む（非同期）
console.error('ファイル読み込みを開始します。');
fs.readFile('hello.js', 'utf8', (err, data) => {
  // エラーが発生していればエラー情報を出力
  if (err) {
    console.error('読み込みエラー：', err);
    return;
  }

  // ファイルの内容を出力
  console.log(data);
});

// ファイル読み込みの完了を待たず先に進む
console.log('ファイル読み込みを待たずに処理を行います。');