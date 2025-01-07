const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true, // null유무
      unique: true, // 고유값
    },
    emailLogin: {
      type: String,
      unique: true,
      sparse: true, // 값이 없는 경우 고유성 검사 예외 처리
    },
    googleLogin: {
      type: String,
      unique: true,
      sparse: true,
    },
    password: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
    },
  },
  {
    timestamps: true, // 자동으로 createdAt, updatedAt 추가
  }
);

module.exports = mongoose.model("Users", usersSchema);
