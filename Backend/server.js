const express = require("express");
const app = express();
const connectDB = require("./config/db");
const router = require('./routes/productRoutes')
const cors = require('cors')

app.use(cors())
require("dotenv").config();
connectDB();
app.use(express.json());
app.use('/api/products', router)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}!`);
});
