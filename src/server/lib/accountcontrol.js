import passport from "passport";
let initialize;

passport.serializeUser((user, done) => {
  // シリアライズはクライアント側にデータを返却
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // デシリアライズはクライアント側から戻ってくる場合userが入ってくる
  done(null, user);
});

initialize = function() {
  return [
    passport.initialize(),
    passport.session(),
  ]
};

module.exports = {
  initialize
};
