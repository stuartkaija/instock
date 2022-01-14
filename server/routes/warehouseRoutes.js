const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

// function to read warehouse data
function getWarehouse () {
    const warehouseFile = fs.readFileSync("./data/warehouses.js");
    const warehouseData = JSON.parse(warehouseFile);
    return warehouseData;
}

// GET list of all warehouses (Enrique)
router.get('/warehouses', (req, res) => {
    // const warehouseData = getWarehouse();
    // return warehouseData;
    console.log("this is a GET endpoint for /warehouses")
});

// GET a single warehouse (Bryn)
router.get('/:warehouseId', (req, res) => {
    console.log("this is a GET endpoint for /warehouses/aSpecificWarehouseId")
});

// POST/CREATE a new warehouse (Bryn)
router.post('/', (req, res) => {
    console.log("this is a POST endpoint for /warehouses, creating a new one");
});

// PUT/PATCH/EDIT a warehouse (Stuart)
router.put('/:warehouseId', (req, res) => {
    console.log("this is a PUT/EDIT endpoint for editing a specific warehouse, presumably by id");
});

// DELETE a warehouse (Ian)
router.delete('/:warehouseId', (req, res) => {
    console.log("this is a DELETE endpoint for deleting a specific warehouse");
});

module.exports = router;