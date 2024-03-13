import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getTodo } from "../api/getTodo";
import { updateTodo } from "../api/updateTodo";

const EditTodo = () => {
    const { id } = useParams();
    const [toUpdate, setToUpdate] = useState('');
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                let data = await getTodo(id);
                setToUpdate(data);
            } catch (error) {
                console.error("Error fetching todo:", error);
            }
        };
        fetchTodo();
    }, [id]);

    const submitHandler = async () => {
        try {
            let updatedTodo = { ...toUpdate, text: userInput }; // This will update the text property
            await updateTodo(updatedTodo); // This calls the updateTodo function with the updated todo object
            alert('Todo item updated successfully');
        } catch (error) {
            console.error("Error updating todo:", error);
            alert('Failed to update todo item');
        }
    };

    return (
        <div>
            <h1>Edit</h1>
            <h2>{toUpdate.text}</h2>
            <input 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={submitHandler}>Submit</button>
        </div>
    );
};

export default EditTodo;