const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

//  function to read warehouse data
const readWarehouseData = () => {
    const warehouseData = fs.readFileSync('./data/warehouses.json');
    const warehouseDataParsed = JSON.parse(warehouseData);
    return warehouseDataParsed
};

//  function to find specific warehouse
const findWarehouseById = (id) => {
    const warehouseData = readWarehouseData();
    return warehouseData.find((warehouse) => id === warehouse.id)
}

// GET list of all warehouses (Enrique)
router.get('/', (req, res) => {
    const warehouses = readWarehouseData();
    res.json(warehouses)
    console.log("this is a GET endpoint for /warehouses")
});

// GET a single warehouse (Bryn)
router.get('/:warehouseId', (req, res) => {
    const id = req.params.warehouseId;
    const foundWarehouse = findWarehouseById(id);
    console.log(foundWarehouse);
    res.send(foundWarehouse);
});

// POST/CREATE a new warehouse (Bryn)
router.post('/', (req, res) => {
    console.log("this is a POST endpoint for /warehouses, creating a new one");
});

// PUT/PATCH/EDIT a warehouse (Stuart)
router.put('/:warehouseId', (req, res) => {
    const id = req.params.warehouseId;
    const foundWarehouse = findWarehouseById(id);
    console.log(req.body);
    const editedWarehouse = req.body

    if (!foundWarehouse) {
        res.status(404).send("It doesn't look like that warehouse exists...");
        return
    }

    // I think we need validation to ensure edited information is good

    res.send('This is a test for the PUT endpoint')

    console.log(foundWarehouse);
});

// DELETE a warehouse (Ian)
router.delete('/:warehouseId', (req, res) => {
    console.log("this is a DELETE endpoint for deleting a specific warehouse");
});

module.exports = router;