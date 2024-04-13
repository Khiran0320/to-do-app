//Initializing express
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors")

//To use express JSON
app.use(express.json());
//To fix CORS error
app.use(cors("http://localhost:5173"));

//To post a ToDo
app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
})

//To get existing ToDos
app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

//To mark ToDos completed
app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },
    { completed: true

})
res.json({
    msg: "Todo marked completed"
})
})

app.listen(3000)