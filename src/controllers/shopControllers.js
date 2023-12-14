const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../data/funkos.json");
const funkoJSON = JSON.parse(fs.readFileSync(filePath, "utf-8"));

module.exports = {
    shopView: (req, res) => 
      res.render("pages/shop/shop",{titulo:"FunkoShop | SHOP", funko:funkoJSON}),
    itemView: (req, res) => {
        const id = req.params.id;
        const item = funkoJSON.find(item => item.product_id == id);
        res.render('pages/shop/item', { item: item, funkoData: funkoData })
    },
    addItemToCart: (req, res) => 
      res.send('Route to add a item to cart'),
    cartView: (req, res) => 
      res.render("pages/shop/cart",{titulo:"FunkoShop | CARRITO"}),
    checkout: (req, res) => 
      res.send('Route to receive the selected products and init the buy process'),
  };