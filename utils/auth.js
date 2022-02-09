// middleware to verify user logged in before restricted route access given
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect("/login");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;