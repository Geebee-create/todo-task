const express = require("express");
const router = express.Router(); // create a router
const itemsController = require("../controllers/itemsController");

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database
router.get("/items", itemsController.getTodos);
router.get("/item/:id", itemsController.getTodo);
router.post("/item", itemsController.createTodo);
router.patch("/item/:id", itemsController.editTodo);
router.delete("/item/:id", itemsController.deleteTodo);
module.exports = router;
