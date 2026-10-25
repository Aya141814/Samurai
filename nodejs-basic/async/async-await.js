// fsモジュールのpromisesを取り込む
const fs = require('fs/promises');

// 3ファイルを読み込む非同期関数
async function readFiles() {
  try {
    console.log('async1：読み込み開始');
    const data1 = await fs.readFile('./async/async1.txt', 'utf8');
    console.log('async1の内容：', data1);

    console.log('async2：読み込み開始');
    const data2 = await fs.readFile('./async/async2.txt', 'utf8');
    console.log('async2の内容：', data2);

    console.log('async3：読み込み開始');
    const data3 = await fs.readFile('./async/async3.txt', 'utf8');
    console.log('async3の内容：', data3);
  } catch (err) {
    console.error('エラー発生：', err);
  }
}

// 非同期処理による3ファイルの読み込みを開始
readFiles();

// ファイル読み込みの完了を待たず先に進む
console.error('ファイル読み込みを待たずに処理を行います。');