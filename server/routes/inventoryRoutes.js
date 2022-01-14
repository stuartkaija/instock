const express = require("express");
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
  console.log(foundInventory);
  res.send(foundInventory);
});

// GET a single inventory item (Bryn)
router.get("", (req, res) => {});

// POST/CREATE a new inventory item (Ian)
router.post("", (req, res) => {});


// PUT/PATCH/EDIT an inventory item (Enrique)
router.put("", (req, res) => {});

// DELETE an inventory item (Enrique)
router.delete("", (req, res) => {});

module.exports = router;
