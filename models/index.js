const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://dashiAdmin:Fo4QTMaON1Ts3NSf@cluster0.n0k5m.mongodb.net/"
    )
    .then(() => console.log("MongoDB conected"))
    .catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;
