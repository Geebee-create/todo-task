// handler functions that will be executed 
const Todo = require("../models/todo")

// first two are completed. 
const getTodos = async (req, res) => {
    // find all items from a mongoose Model method 
    const items = await Todo.find({})
    // respond with an object that has a message and the items from the DB
    res.json({
        message: "all items",
        todos: items
    })
}

// DONE. try-catch added in. 
const getTodo = async (req, res) => {
    // get id from ':id' param from the route (the :id in the route path)
    const { id } = req.params
    // find todo with Model.findById()
    try {
        const todo = await Todo.findById(id)
        // if specific todo isn't found
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' })
        }
        // response (res) with .json with the todo found
        res.status(200).json(todo)
        // for any other errors
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'An error occured on the server' })
    }
}

// DONE 
const createTodo = async (req, res) => {
    // get the text from the req.body
    const { text } = req.body
    console.log(text)
    // create new todo object with model
    const todoObject = new Todo({
        text
    })
    // await for it to be saved
    const newTodo = await todoObject.save()
    // respond with json()
    res.status(200).json(newTodo)
}

// DONE
const editTodo = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params;
    // use mongoose model method findByIdAndUpdate
    const todo = await Todo.findByIdAndUpdate(id);
    res.status(200).json(todo)
}

// DONE
const deleteTodo = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params;
    // use mongoose model method findByIdAndDelete
    const todo = await Todo.findByIdAndDelete(id);
    res.status(200).json(todo)
}

module.exports = {
    createTodo,
    getTodos,
    editTodo,
    deleteTodo,
    getTodo
}