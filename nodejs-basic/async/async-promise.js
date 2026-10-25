// fsモジュールのpromisesを取り込む
const fs = require('fs/promises');

console.log('async1：読み込み開始');

fs.readFile('./async/async1.txt', 'utf8')
  .then(data1 => {
    console.log('async1の内容：', data1);

    console.log('async2：読み込み開始');
    return fs.readFile('./async/async2.txt', 'utf8');
  })
  .then(data2 => {
    console.log('async2の内容：', data2);

    console.log('async3：読み込み開始');
    return fs.readFile('./async/async3.txt', 'utf8');
  })
  .then(data3 => {
    console.log('async3の内容：', data3);
  })
  .catch(err => {
    console.error('エラー発生：', err);
  });

// ファイル読み込みの完了を待たず先に進む
console.error('ファイル読み込みを待たずに処理を行います。');