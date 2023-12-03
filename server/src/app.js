const express = require("express")
const cors = requires("cors")
const routes = require("./routes/routes")

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

module.exports = app