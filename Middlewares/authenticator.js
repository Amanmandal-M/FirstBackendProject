const jwt = require('jsonwebtoken');
require("dotenv").config();

const validator = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.key, (err, decoded) => {
    if (err) {
      res.send(res.status(401));
      console.log(err);
    } else {
        next();
    }
  });
};

module.exports ={validator}
