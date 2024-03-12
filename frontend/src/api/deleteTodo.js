const API_URL = `http://localhost:4000`;

export const deleteTodo = async (todo) => {
  // add url which is for delete
  // add the _id for the ':id' param
  const response = await fetch(`http://localhost:4000/todos/${todo._id}`, {
    // method type?
    method: "DELETE",
    // content type?
    headers: {
      "Content-Type": "application/json",
    },
  });
  // convert to json
  const json = await response.json();
  // return json
  return json;
};
