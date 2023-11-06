const {validationResult} = require('express-validator');
const mongoose = require('mongoose');

exports.validate = (req, res, next) => {
  // check if the id is valid or not to avoid casting error from mongoose
  const errors = validationResult(req);
  if(!errors.isEmpty()) return res.status(422).json({errors: errors.array()});
  next();
}

exports.isObjectId = (value) => mongoose.Types.ObjectId.isValid(value); // this function will be used in the validation to check if the id is valid or not to avoid casting error from mongoose