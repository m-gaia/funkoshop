const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../data/funkos.json");
const funkoJSON = JSON.parse(fs.readFileSync(filePath, "utf-8"));


module.exports = {
    mainPage: (req, res) => 
    res.render("index",{titulo:"FunkoShop | HOME", funko:funkoJSON}),
    homeView: (req, res) => 
      res.render("index",{titulo:"FunkoShop | HOME", funko:funkoJSON}),
    contactView:(req, res) => 
      res.send('Contact View Route'),
    aboutView:(req, res) => 
      res.send('About View Route'),
    faqsView:(req, res) => 
      res.send('FAQs View Route'),
  };