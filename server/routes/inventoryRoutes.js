const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

function readInventories() {
  const data = fs.readFileSync("./data/inventories.json");
  const parsedData = JSON.parse(data);
  return parsedData;
}

const findSpecificInventory = (id) => {
  const inventoryData = readInventories();
  return inventoryData.filter((inventory) => id === inventory.warehouseID)
};

const findSpecificItem = (id) => {
  const inventoryData = readInventories();
  return inventoryData.find((inventory) => id === inventory.id)
};

// GET list of all inventory items (Ian)
router.get("/", (req, res) => {
  // Respond with the inventory from the data file
  const inventory = readInventories();
  res.send(inventory);
});

// GET inventories for a specific warehouse (Stuart)
router.get("/:warehouseId", (req, res) => {
  const id = req.params.warehouseId;
  const foundInventory = findSpecificInventory(id);
  res.send(foundInventory);
});

// GET a single inventory item (Bryn)
router.get("/:itemId/item", (req, res) => {
  const id = req.params.itemId;
  const foundItem = findSpecificItem(id);
  res.send(foundItem);
});

// POST/CREATE a new inventory item (Ian)
router.post("", (req, res) => {});


// PUT/PATCH/EDIT an inventory item (Enrique)
router.put("/:inventoryId", (req, res) => {
  const inventoryData = readInventories();
  const id = req.params.inventoryId;
  const foundInventory = readInventories().find((inventory) => id === inventory.id)
  foundInventory["itemName"] = req.body.name;
  foundInventory["description"] = req.body.description;
  foundInventory["category"] = req.body.category;
  foundInventory["status"] = req.body.radioButton;
  foundInventory["quantity"] = req.body.quantity;
  foundInventory["warehouseName"] = req.body.warehouse;
  fs.writeFileSync("./data/inventories.json", JSON.stringify(inventoryData));
  res.status(200).json(foundInventory);
});

// DELETE an inventory item (Enrique)
router.delete("", (req, res) => {});

module.exports = router;
