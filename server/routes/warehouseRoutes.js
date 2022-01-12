const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

// GET list of all warehouses (Enrique)
router.get('/', (req, res) => {
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