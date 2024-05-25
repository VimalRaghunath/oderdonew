const express = require("express")
const cors = require("cors")
const connectDB = require("./DB/DB")
const dotenv = require("dotenv")
const OderdoRoutes = require("./Routes/OderdoRoutes")


dotenv.config()

connectDB()
const app = express()
app.use(cors())

app.use(express.json())


app.get("/", (req, res) => {
   res.send("API is Running")
})

app.use("/oderdo/", OderdoRoutes)

const PORT = process.env.PORT || 4000

app.listen(4000, console.log(`Server is Running at ${PORT}`))