const express = require("express")
const path = require("path")
const app = express()
const fs = require("fs")

//default port
const PORT = 3000


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use("/scripts", express.static(path.join(__dirname, "/src/scripts")))
app.use("/sounds", express.static(path.join(__dirname, "/src/sounds")))
app.use("/sprites", express.static(path.join(__dirname, "/src/sprites")))


app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.get("/getSprites", (_req, res) => {
    const data = fs.readdirSync(path.join(__dirname, "/src/sprites"))
    res.send(data)
})