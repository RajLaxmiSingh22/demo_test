export const addUserMiddleware = (req, res, next) => {
  req.user = "Guest";
  next();
};
