const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require('./middleware/error');

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())   

// Routes
const product = require("./routes/productRoute")
const user = require('./routes/userRoutes');
const order = require('./routes/orderRoute');

app.use("/api/v1", product)
app.use("/api/v1", user)
app.use("/api/v1", order)

// Middleware
app.use(errorMiddleware)

module.exports = app