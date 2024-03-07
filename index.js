const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();
app.use(express.json())

app.post("/todos", (req, res) => {
    const createPayload = req.body
    const parsepayload = createTodo.safeParse(createPayload)
    if(!parsepayload.success)
    {
        res.status(411).json({
            msg:"you sent the wrong input "
        })
        return
    }

})

app.get("/todos", (req, res) => {
    console.log(req.body)
})

app.put("/completed", (req, res) => {
    const updatePayload = req.body
    const parsepayload = createTodo.safeParse(updatePayload)
    if(!parsepayload.success)
    {
        res.status(411).json({
            msg:"you sent the wrong input "
        })
        return
    }

})
