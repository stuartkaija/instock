const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

function readInventories() {
  const data = fs.readFileSync("./data/inventories.json");
  const parsedData = JSON.parse(data);
  return parsedData;
}

// GET list of all inventory items (Ian)
router.get("/", (req, res) => {
  // Respond with the inventory from the data file
  const inventory = readInventories();
  res.send(inventory);
});

// GET inventories for a specific warehouse (Enrique)
router.get("", (req, res) => {});

// GET a single inventory item (Bryn)
router.get("", (req, res) => {});

// POST/CREATE a new inventory item (Ian)
router.post("/", (req, res) => {
  const newInventoryItem = {
    id: uniqid(),
    // warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
    warehouseName: req.body.warehouseName,
    itemName: req.body.itemName,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status,
    quantity: req.body.quantity,
  };

  const inventory = readInventories();
  inventory.push(newInventoryItem);
  fs.writeFileSync("./data/inventories.json", JSON.stringify(inventory));

  // Respond with the Inventory that was created
  res.status(201).json(newInventoryItem);
});

// PUT/PATCH/EDIT an inventory item (Enrique)
router.put("", (req, res) => {});

// DELETE an inventory item (Enrique)
router.delete("", (req, res) => {});

module.exports = router;
