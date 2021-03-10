const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/example', (req, res) => {
    res.send(`Employee details received:${req.body.empName},${req.body.empID},${req.body.empDesignation}`);
   console.log(`Employee ID received:${req.body.empName}`);
   console.log(`Employee ID received:${req.body.empID}`);
   console.log(`Employee designation received:${req.body.empDesignation}`);
 // res.send(`Employee Name received:${req.body.empName}`);
  //res.send(`Employee ID received:${req.body.empID}`);
 // res.send(`Employee designation received:${req.body.empDesignation}`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});