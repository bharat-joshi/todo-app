const express = require("express")
const app = express();

app.use(express.json())

app.post("/todos", (req, res) => {
    console.log(req.body)
})

app.get("/todos", (req, res) => {
    console.log(req.body)
})

app.put("/completed", (req, res) => {
    console.log(req.body)
})
