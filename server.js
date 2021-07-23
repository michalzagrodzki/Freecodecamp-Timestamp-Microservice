// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

const { DEFAULT_PORT } = require("./utils/constants");
const date_controller = require("./controllers/date");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// date endpoint
app.get("/api/:date?", date_controller.details);

// listen for requests :)
const listener = app.listen(DEFAULT_PORT || process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
