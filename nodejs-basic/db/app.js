// mysql2モジュールのpromiseを取り込む
const mysql = require('mysql2/promise');

// 非同期処理でデータベースを操作
async function getUsers() {
  let connection;
  try {
    // データベースに接続
    connection = await mysql.createConnection({
      host: 'localhost', // ホスト名
      port: 8889, // ポート番号（Macの方は8889にしてください）
      user: 'root', // MySQLのユーザー名(初期設定は'root')
      password: 'root', // MySQLのパスワード(初期設定はXAMPPが''、MAMPが'root')
      database: 'nodejs_db' // 使用するデータベース名
    });

    console.log('MySQLデータベースに接続しました。');

    // SQL文をMySQLに送信し、usersテーブルの全データを取得
    const [rows] = await connection.execute('SELECT * FROM users;');

    // 取得したデータを表示
    console.log('usersテーブルのデータ：', rows);

  } catch (error) {
    console.error('データベース操作エラー：', error);
  } finally {
    // 接続を解除(エラー有無を問わず実行)
    if (connection) {
      await connection.end();
      console.log('データベース接続を解除しました。');
    }
  }
}

// ユーザーリストを取得
getUsers();