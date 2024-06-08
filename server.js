const express = require("express")
const { dbConnection } = require("./database")
const app = express()
const allRouter = require("./routes")
const cors = require('cors')

require('dotenv').config()


const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use("/", allRouter)


dbConnection()
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})