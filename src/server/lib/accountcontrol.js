import passport from "passport";
let initialize;

passport.serializeUser((email, done) => {
  // シリアライズはクライアント側にデータを返却
  done(null, email);
});

passport.deserializeUser((email, done) => {
  // でシリアライズはクライアント側から戻ってくる場合emailが入ってくる

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
