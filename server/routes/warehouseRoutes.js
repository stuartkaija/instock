const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

//  function to read warehouse data
const readWarehouseData = () => {
  const warehouseData = fs.readFileSync("./data/warehouses.json");
  const warehouseDataParsed = JSON.parse(warehouseData);
  return warehouseDataParsed;
};

//  function to find specific warehouse
const findWarehouseById = (id) => {
  const warehouseData = readWarehouseData();
  return warehouseData.find((warehouse) => id === warehouse.id);
};

// GET list of all warehouses (Enrique)
router.get("/", (req, res) => {
  const warehouses = readWarehouseData();
  res.json(warehouses);
  console.log("this is a GET endpoint for /warehouses");
});

// GET a single warehouse (Bryn)
router.get("/:warehouseId", (req, res) => {
  const id = req.params.warehouseId;
  const foundWarehouse = findWarehouseById(id);
  console.log(foundWarehouse);
  res.send(foundWarehouse);
});

// POST/CREATE a new warehouse (Bryn)
router.post("/", (req, res) => {
  if (
    !req.body.name ||
    !req.body.address ||
    !req.body.city ||
    !req.body.country ||
    !req.body.contact.name ||
    !req.body.contact.position ||
    !req.body.contact.phone ||
    !req.body.contact.email
  ) {
    res.status(404).send("Fill the form out completely");
    return;
  }

  const newWarehouse = {
    id: uniqid(),
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    contact: {
      name: req.body.contact.name,
      position: req.body.contact.position,
      phone: req.body.contact.phone,
      email: req.body.contact.email,
    },
  };
  const warehouses = readWarehouseData();
  warehouses.push(newWarehouse);
  fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouses));

  res.status(201).json(newWarehouse);
});

// PUT/PATCH/EDIT a warehouse (Stuart)
router.put("/:warehouseId/", (req, res) => {
  const warehouseData = readWarehouseData();
  const id = req.params.warehouseId;
  const foundWarehouse = warehouseData.find((warehouse) => id === warehouse.id);

  if (!foundWarehouse) {
    res.status(404).send("It doesn't look like that warehouse exists...");
    return;
  }

  //  validation in case any fields are left blank
  if (req.body.name) {
    foundWarehouse.name = req.body.name;
  }
  if (req.body.address) {
    foundWarehouse.address = req.body.address;
  }
  if (req.body.city) {
    foundWarehouse.city = req.body.city;
  }
  if (req.body.country) {
    foundWarehouse.country = req.body.country;
  }
  if (req.body.contact.name) {
    foundWarehouse.contact.name = req.body.contact.name;
  }
  if (req.body.contact.position) {
    foundWarehouse.contact.position = req.body.contact.position;
  }
  if (req.body.contact.phone) {
    foundWarehouse.contact.phone = req.body.contact.phone;
  }
  if (req.body.contact.email) {
    foundWarehouse.contact.email = req.body.contact.email;
  }

  fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouseData));

  res.status(200).json(foundWarehouse);
});

// DELETE a warehouse (Ian)
router.delete('/:warehouseId', (req, res) => {

    // delete a warehouse 
    const warehouseData = readWarehouseData();
    const warehouseMatch = warehouseData.find((warehouse) => warehouse.id === req.params.warehouseId);
    const warehouseMatchIndex = warehouseData.indexOf((warehouseMatch));
    warehouseData.splice(warehouseMatchIndex, 1);
    fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouseData))

    // delete all dependant inventory items
    const invData = fs.readFileSync("./data/inventories.json");
    const inventoryData = JSON.parse(invData);
    const inventoryMatch = inventoryData.filter((inventory) => !(inventory.warehouseID === req.params.warehouseId));

    fs.writeFileSync("./data/inventories.json", JSON.stringify(inventoryMatch));


    res.status(202).send("Warehouses deleted and all associated inventory items deleted");
});

module.exports = router;
