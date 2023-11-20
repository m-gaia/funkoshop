module.exports = {
    homeView: (req, res) => res.render("home",{titulo:"FunkoShop | HOME"}),
    contactView:(req, res) => res.send('Contact View Route'),
    aboutView:(req, res) => res.send('About View Route'),
    faqsView:(req, res) => res.send('FAQs View Route'),
  };