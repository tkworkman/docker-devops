const protect = (req, res, next) => {
    const { user } = req.session;
  
    if (!user) {
      return res.status(401).json({ status: "fail", message: "unauthorized" });
    }
  
    req.user = user;
  
    // sends to controller or next middlware in the stack
    next();
  };
  
  module.exports = protect;