const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://khiransasikumar11207:MongoDB12@cluster0.xbq15bf.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}