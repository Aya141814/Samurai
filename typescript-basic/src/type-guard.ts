const printValue = (value: string | number): void => {
  // typeof演算子を使って型を絞り込む
  if (typeof value === 'string') {
    // このブロック内ではstring型であることが保証されるので、string型専用のtoUpperCase()メソッドを安全に呼び出せる
    console.log(value.toUpperCase());
  } else {
    // このブロック内ではnumber型であることが保証されるので、number型専用のtoFixed()メソッドを安全に呼び出せる
    console.log(value.toFixed(2));
  }
};

printValue('samurai');
printValue(123.456);