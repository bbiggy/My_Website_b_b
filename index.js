const express = require("express")
const app = express()
const worker = require("./models/worker")

app.get('/', (req, res) => {
    res.send("สวัสดียินดีต้อนรับสู่เว็บไซต์")
})

app.get("/about", (req,res) =>{
    res.send(worker.Hello())
})

app.get("*", (req, res) => {
    res.sendFile(__dirname +"/public/Error_404.html")
})

app.listen(3000, () => {
    console.log("Start Server at Port [3000]")
})