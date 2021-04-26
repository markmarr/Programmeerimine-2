const isAdmin = (req, res, next) => {
  console.log(req.userRole);
    if (req.userRole === 'admin') {
      next();
    } else {
      res.status(403).json({
        error: 'You have to be admin',
      });
    }
  };
  
  module.exports = isAdmin;