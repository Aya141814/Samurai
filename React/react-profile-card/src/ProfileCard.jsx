export function ProfileCard({ name = "未指定", age, bio }) {
  // ボタンのクリック時に処理するイベントハンドラ
  const handleClick = () => {
    alert(
      "当社では、プログラミング学習者向けにReactを活用した実践的な学習教材を提供しています。Reactの基本から応用まで、手を動かしながら学べるコンテンツを通じて、確かなスキル習得を目指せます。",
    );
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <h2>{name}</h2>
      <p>【年齢】 {age}歳</p>
      <p>【自己紹介】{bio}</p>
    </div>
  );
}
