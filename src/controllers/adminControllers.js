module.exports = {
    adminView: (req, res) => 
      res.render("pages/admin/admin",{titulo:"FunkoShop | ADMIN"}),
    createView:  (req, res) => 
      res.render("pages/admin/create",{titulo:"FunkoShop | CREATE"}),
    createItem:  (req, res) => 
      res.send('Create Route that receive a new item data to add in Database'),
    editView:  (req, res) => 
      res.send('Edit View Route'),
    editItem:  (req, res) => 
      res.send('Edit Route that receive data to modify an item in Database'),
    deleteItem:  (req, res) => 
      res.send('Delete Route that receive the ID to the item to delete from database'),
  };