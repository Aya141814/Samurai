// 外部データを取得
async function fetchData() {
  console.log('ユーザーデータの取得を開始します。');

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    console.log(`データ取得が完了しました。取得件数：${json.length}件`)
    console.log("ユーザー一覧：")
    json.forEach(user => {
      console.log(user.name)
    });
    console.log("ユーザーデータの取得が終了しました。")    
 } catch (error) {
  console.error('エラー発生：', error);
  }
}

// 外部データを取得
console.log('fetchData()関数を実行します。');
fetchData();
console.log('fetchData()関数を実行しました。');

// 100ミリ秒ごとにメッセージを表示
let count = 1;
const interval = setInterval(() => {
  console.log(`別の処理を実行中... ${count++}`);
  if (count > 10) clearInterval(interval);
}, 100);