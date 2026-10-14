class Product {
 public name: string;  // どこからでもアクセス可能
 private price: number;  // 同じクラス内からのみアクセス可能
 protected category: string;  // 同じクラス内およびサブクラス（継承先のクラス）からのみアクセス可能

 constructor(name: string, price: number, category: string) {
   this.name = name;
   this.price = price;
   this.category = category;
 }

 // 同じクラス内からはすべてのプロパティにアクセス可能
 describe(): void {
   console.log('---- 同じクラス内からのアクセス ----');
   console.log(`商品名：${this.name}`);  // OK
   console.log(`価格：${this.price}`);  // OK
   console.log(`カテゴリ：${this.category}`);  // OK
 }
}

// Productクラスのサブクラス
class Drink extends Product {
 // サブクラスからはprivate以外のプロパティにアクセス可能
 describe(): void {
   console.log('---- サブクラスからのアクセス ----');
   console.log(`商品名：${this.name}`);  // OK
   // console.log(`価格：${this.price}`);  // エラー
   console.log(`カテゴリ：${this.category}`);  // OK
 }
}

// Productクラスをインスタンス化する
const shampoo = new Product('シャンプー', 500, '生活雑貨');
shampoo.describe();

// Drinkクラスをインスタンス化する
const coffee = new Drink('コーヒー', 1500, '飲料');
coffee.describe();

// 外部からはpublicなプロパティにのみアクセス可能
console.log('---- 外部からのアクセス ----');
console.log(`商品名：${shampoo.name}`);  // OK
// console.log(`価格：${shampoo.price}`);  // エラー
// console.log(`カテゴリ：${shampoo.category}`);  // エラー