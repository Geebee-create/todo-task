const API_URL = `http://localhost:4000`;

export const getTodo = async (id) => {
  let response = await fetch(`${API_URL}/todos/${id}`); // Use the 'id' parameter instead of 'todo._id'
  let data = await response.json();
  return data.todos;
};



// export const getTodo = async (id) => {
// let response = await fetch(`http://localhost:4000/todos/${todo._id}`);
// let data = await response.json();
// return data.todos;
// };
