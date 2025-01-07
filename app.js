const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

const connect = require("./models");
connect();

const userRouter = require("./routers/userRouter");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/users", userRouter);

app.use((_, res) => {
  res.status(404).json({ success: false, token: "", message: "요청이 잘못됨" });
});

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
