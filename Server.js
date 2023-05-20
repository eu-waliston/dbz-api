const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rootRouter = require("./controller/api");

require("dotenv").config();

const PORT = process.env.PORT;
const server = express();

//middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(helmet());
server.set('trust proxy', true)

//static files
server.use(express.static("public"));

//db connection
require("./config/database");

//routes
server.use("/", rootRouter);

//server init
server.listen(PORT, () => {
  console.log(`🚀 Server Running on PORT ${PORT}`);
});