// React側の共通関数を定義
// number型の０埋め(2桁)
export const padStartWithZero = (num) => {
  return num.toString().padStart(2, "0");
}
