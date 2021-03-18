const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let cors = require("cors");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
let whitelist = ["http://localhost:3000/example/", "http://127.0.0.1:5500"];
let corsOptions = {
  origin: function (origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.post("/example", function (req, res) {
  console.log(req);
  res.send({
    empName: req.body.empName,
    empId: req.body.empId,
    empDesignation: req.body.empDesignation,
  }); // echo the result back
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});
