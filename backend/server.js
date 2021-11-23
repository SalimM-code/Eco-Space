require("dotenv").config();

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const morgan = require("morgan");
const cors = require("cors");
const storePRouter = require("./routes/storeP");
const usersRouter = require("./routes/users");
const freePRouter = require("./routes/freeP");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 8080;

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["secrect key are really hard to break", "2565evchsb 66edvc3tf27"],
  })
);

// routes
app.use("/api/users", usersRouter);
app.use("/api/store", storePRouter);
app.use("/api/freecycle", freePRouter);

io.on('connection', (socket) => {
  console.log("a user connected", socket.id);
})


server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
