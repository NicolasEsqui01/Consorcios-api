const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

export const createToken = (data: any) =>
  jwt.sign(data, process.env.JWT_SECRET);


  export const verifyToken = async (req: any, res: any, next: Function) => {
  try {
    const token = req.headers.token || req.query.token;
    if (token) {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      return next();
    } else {
      throw { status: 401, message: "Not found Headers" };
    }
  } catch (err) {
    console.log(err);
    req.user = {};
    if (err.message) return res.status(err.status).json(err);
    if (err) return res.status(403).json({ message: "Invalid Token. " + err });
  }
};
