module.exports = {
    loginView:  (req, res) => 
      res.render("pages/auth/login",{titulo:"FunkoShop | LOGIN"}),
    loginUser:  (req, res) => 
      res.send('Login Route that receive the data when user click login button'),
    registerView:  (req, res) => 
      res.render("pages/auth/register",{titulo:"FunkoShop | REGISTER"}),
    registerUser:  (req, res) => 
      res.send('Register Route that receive the data when user click register button'),
    logoutView:  (req, res) => 
      res.send('logoutView'),
};