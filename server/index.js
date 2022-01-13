const express = require("express");
const app = express();
const cors = require("cors");
const warehouseRoutes = require("./routes/warehouseRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

//  CONFIGURATION
require("dotenv").config();
const port = process.env.PORT || 8080;

//  MIDDLEWARE
app.use(express.json());
app.use(cors());

//  ROUTES
app.use("/warehouses", warehouseRoutes);
app.use("/inventory", inventoryRoutes);

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
