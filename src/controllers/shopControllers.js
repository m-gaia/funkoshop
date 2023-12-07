module.exports = {
    shopView: (req, res) => 
      res.render("pages/shop/shop",{titulo:"FunkoShop | SHOP"}),
    itemView: (req, res) => 
      res.send('Individual Item View Route'),
    addItemToCart: (req, res) => 
      res.send('Route to add a item to cart'),
    cartView: (req, res) => 
      res.render("pages/shop/cart",{titulo:"FunkoShop | CARRITO"}),
    checkout: (req, res) => 
      res.send('Route to receive the selected products and init the buy process'),
  };