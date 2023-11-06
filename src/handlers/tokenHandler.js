const jsonwebtoken = require("jsonwebtoken");
const User = require("../models/user");

const tokenDecode = (req) => {
  // this function will be used in the middleware to decode the token and get the user id from it to use it in the next middleware to get the user from the database and attach it to the request object to be used in the next middlewares and controllers
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    try {
      const tokenDecoded = jsonwebtoken.verify(
        bearerToken,
        process.env.TOKEN_SECRET_KEY
      );
      return tokenDecoded;
    } catch {
      return false;
    }
  } else {
    return false;
  }
};

exports.verifyToken = async (req, res, next) => {
  // this middleware will be used in the routes that need authentication to verify the token and get the user from the database and attach it to the request object to be used in the next middlewares and controllers
  const tokenDecoded = tokenDecode(req);
  if (!tokenDecoded) return res.status(401).json({ message: "Unauthorized" });
  try {
    const user = await User.findById(tokenDecoded.id);
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
