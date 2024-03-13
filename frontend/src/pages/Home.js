import { useEffect, useState } from "react";
import { readTodos } from "../api/readTodos";
import Card from '../components/Card'
import { deleteTodo } from "../api/deleteTodo";


const Home = () => {
    const [todos, setTodos] = useState([]);


    const deleteHandler = async (todoID) => {
        try {
            await deleteTodo(todoID);
            // Line below will filter out the deleted todo
            setTodos(prevTodos => prevTodos.filter(todo => todo._id !== todoID));
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    }

// I don't need to import anything for fetchTodos to work.
// another try catch could potentially be added in here.
    useEffect(() => {
        const fetchTodos = async () => {
            let data = await readTodos()
            setTodos(data.todos)
            console.log(data.message)
        }
        fetchTodos()
    }, [])


// instead of checking for !todos, this checks if the todos.length is 0
// this is better as !todos might show loading even when the array is null
    if (todos.length === 0) return <h1>loading...</h1>;
   
 
return (
    <div>
        <>
            {todos.map((todo) => (
                // Passes the deleteHandler function as a prop to the Card component
                <Card key={todo._id} deleteHandler={() => deleteHandler(todo._id)} todo={todo}/>
            ))}
        </>
    </div>
);
}

export default Home