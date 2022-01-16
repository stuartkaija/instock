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
router.put("/:inventoryId", (req, res) => {
  const inventoryData = readInventories();
  const id = req.params.inventoryId;
  const foundInventory = inventoryData.find((inventory) => id === inventory.id)
  console.log(foundInventory);
  if (req.body.name) {foundInventory["itemName"] = req.body.name};
  if (req.body.description) {foundInventory["description"] = req.body.description};
  if (req.body.category) {foundInventory["category"] = req.body.category};
  if (req.body.radioButton) {foundInventory["status"] = req.body.radioButton};
  if (req.body.quantity) {foundInventory["quantity"] = req.body.quantity};
  if (req.body.warehouse) {foundInventory["warehouseName"] = req.body.warehouse};
  console.log(foundInventory);
  fs.writeFileSync("./data/inventories.json", JSON.stringify(inventoryData));
  res.status(200).json(foundInventory);
});

// DELETE an inventory item (Enrique)
router.delete("", (req, res) => {});

module.exports = router;
