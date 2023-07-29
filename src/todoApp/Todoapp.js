// import React, { useReducer, useState } from "react";
// import { initialState, todoReducer } from "./Todoreducer";

// const Todoapp = () => {
//   const [state, dispatch] = useReducer(todoReducer, initialState);
//   const [inputValue, setInputValue] = useState("");

//   const addTodo = (e) => {
//     e.preventDefault();
//     if (!inputValue.trim()) {
//       dispatch({ type: "SET_ERROR", payload: "Please enter a to-do item." });
//       return;
//     }
//     dispatch({
//       type: "ADD_TODO",
//       payload: {
//         id: Date.now(),
//         title: inputValue.trim(),
//         completed: false,
//       },
//     });
//     setInputValue("");
//     dispatch({ type: "SET_ERROR", payload: null });
//   };
//   const toggleTodo = (id) => {
//     dispatch({ type: "TOGGLE_TODO", payload: id });
//   };
//   const removeTodo = (id) => {
//     dispatch({ type: "REMOVE_TODO", payload: id });
//   };

//   return (
//     <div className="todo-app">
//       <h1> Todo List </h1>{" "}
//       <form onSubmit={addTodo}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Enter a new to-do item"
//         />
//         <button type="submit"> Add </button>{" "}
//       </form>{" "}
//       {state.error && <p className="error"> {state.error} </p>}{" "}
//       <ul>
//         {" "}
//         {state.todos.map((todo) => (
//           <li key={todo.id} className={todo.completed ? "completed" : ""}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleTodo(todo.id)}
//             />{" "}
//             {todo.title}{" "}
//             <button onClick={() => removeTodo(todo.id)}> Remove </button>{" "}
//           </li>
//         ))}{" "}
//       </ul>{" "}
//     </div>
//   );
// };

// export default Todoapp;
// To add a submit button that prints the selected items on the webpage, you can modify the code as follows:

import React, { useReducer, useState } from "react";
import { initialState, todoReducer } from "./Todoreducer";

const Todoapp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      dispatch({ type: "SET_ERROR", payload: "Please enter a to-do item." });
      return;
    }
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        title: inputValue.trim(),
        completed: false,
      },
    });
    setInputValue("");
    dispatch({ type: "SET_ERROR", payload: null });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const handlePrintSelectedItems = () => {
    const selected = state.todos.filter((todo) => todo.completed);
    setSelectedItems(selected);
    console.log(selected);
  };

  return (
    <div className="todo-app">
      <h1> Todo List </h1>{" "}
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new to-do item"
        />
        <button type="submit"> Add </button>{" "}
      </form>{" "}
      {state.error && <p className="error"> {state.error} </p>}{" "}
      <ul>
        {" "}
        {state.todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />{" "}
            {todo.title}{" "}
            <button onClick={() => removeTodo(todo.id)}> Remove </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
      <button onClick={handlePrintSelectedItems}> Print Selected Items </button>{" "}
      {selectedItems.length > 0 && (
        <div>
          <h2> What I did Today: </h2>{" "}
          <ul>
            {" "}
            {selectedItems.map((item) => (
              <li key={item.id}> {item.title} </li>
            ))}{" "}
          </ul>{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default Todoapp;
