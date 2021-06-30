// const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
// const morgan = require("morgan");

const recordsRouter = require("./routes/records/records.router");

const app = express();
app.use(bodyParser.json());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

// app.use(morgan("combined"));

// app.use(express.json());
// app.use(express.static(path.join(__dirname, "..", "public")));

app.use(recordsRouter);

module.exports = app;
