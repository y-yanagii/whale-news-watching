// stateの全てをここで初期化
// object型でモデルっぽく宣言
const initialState = {
  users: {
    isSignedIn: false,
    uid: "",
    username: "",
    email: "",
    errorMessages: []
  },
};

export default initialState;
