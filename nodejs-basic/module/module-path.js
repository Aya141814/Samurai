// pathモジュールをインポート
const path = require('path');

// ファイルパス
const filePath = '/users/samurai/docs/file.txt';

console.log(path.basename(filePath)); // ファイル名を出力
console.log(path.dirname(filePath)); // ディレクトリ名を出力
console.log(path.extname(filePath)); // 拡張子を出力

// パスを組み立てる
const fullPath = path.join('projects', 'webapp', 'assets', 'logo.png')
console.log(fullPath); // 完成されたパスを出力