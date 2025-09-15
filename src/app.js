const express = require("express");

const app = express(); //creating server using express

app.listen("3000", () => {
  console.log("server is listening successfully");
}); //server listen port number 3000

// app.use((req, res) => {
//   // request handler functions
//   res.send("hi from server");
// });

app.get("/user", (req, res) => {
  res.send("data get");
});

app.post("/user", (req, res) => {
  res.send("data posted sucessfully");
});

app.delete("user", (req, res) => {
  res.send("data deleted successfully");
});

app.use("/hello", (req, res) => {
  res.send("hello from server");
});

app.use("/test", (req, res) => {
  res.send("application is testing");
});
