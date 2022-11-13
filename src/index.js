const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

const multer = require("multer");
const upload = multer({
  dest: "images",
});

app.post("/upload", upload.single("upload"), (req, res) => {
  res.send();
});
// app.use((req, res, next) => {
//   res.status(503).send("The site is in maintenance mode");
// });

// endpoints
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Listen
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");

// const main = async () => {
//   // const task = await Task.findById("634861546c81304508729bfc");
//   // await task.populate("owner");
//   // console.log(task.owner);
//   const user = await User.findById("63485c0e782d647882eb6cab");
//   await user.populate("tasks");
//   console.log(user.tasks);
// };

// main();

// const bcrypt = require("bcryptjs");

// const myFunc = async () => {
//   const password = "Red1234!";
//   const hashedPass = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hashedPass);
// };

// myFunc();

// const jwt = require("jsonwebtoken");

// const myFunc = async () => {
//   const token = jwt.sign({ _id: "aaryen" }, "course", { expiresIn: "7 days" });
//   console.log(token);

//   const data = jwt.verify(token, "course");
//   console.log(data);
// };

// myFunc();
