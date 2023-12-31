const express = require("express");
const cors = require("cors");
const db = require("./db");
const register = require("./routes/register");
const login = require("./routes/login");
const profile = require("./routes/profile");
const message = require("./routes/message");
const users = require("./routes/users");
const user = require("./routes/user");

require("dotenv").config();

const app = express();

db();

app.use(express.json());
app.use(cors());
app.use("/register", register);
app.use("/login", login);
app.use("/profile", profile);
app.use("/message", message);
app.use("/users", users);
app.use("/user", user);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server running on ${port}...`));
