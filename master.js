// ゲームスタート用の関数
function start() {
  // 入力フォームの数値を取得して変数に格納
  var sphere_num = document.getElementById('sphere_num').value;

  // 処理が重くなるのが怖いので、入力値が1000より大きいときはエラーを出す
  if (sphere_num) {
    if (sphere_num > 1000) {
      alert("1以上1000以下の整数値を入力してください");
    } else {
      window.location.href = 'game.html?' + sphere_num;
    }
  } else {
    alert("1以上1000以下の整数値を入力してください");
  }
}

// トップ画面に戻る関数
function replay() {
  window.location = 'final.html';
}