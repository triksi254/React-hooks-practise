import React, { useReducer, useState } from "react";
import { initialState, todoReducer } from "../Todoreducer";

const Advancedtodo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [updateValue, setUpdateValue] = useState("");

  // const [entries, setEntries] = useState();
  // setEntries(selectedItems);

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
  const handlePrintSelectedItems = () => {
    const selected = state.todos.filter((todo) => todo.completed);
    setSelectedItems(selected);
    console.log(selected);
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const handleUpdate = (id) => {
    setSelectedItemId(id);
    const todoToUpdate = state.todos.find((todo) => todo.id === id);
    setUpdateValue(todoToUpdate.title);
  };

  const handleUpdateInputChange = (e) => {
    setUpdateValue(e.target.value);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (!updateValue.trim()) {
      dispatch({ type: "SET_ERROR", payload: "Please enter a new title." });
      return;
    }

    dispatch({
      type: "UPDATE_TODO",
      payload: {
        id: selectedItemId,
        title: updateValue.trim(),
      },
    });
    setSelectedItemId(null);
    setUpdateValue("");
    dispatch({ type: "SET_ERROR", payload: null });
  };

  // useEffect(() => {
  //   fetch("http://localhost:8000/entries")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((entries) => {
  //       console.log(entries);
  //     });
  // }, []);

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
            {selectedItemId === todo.id ? (
              <form onSubmit={handleUpdateSubmit}>
                <input
                  type="text"
                  value={updateValue}
                  onChange={handleUpdateInputChange}
                />{" "}
                <button type="submit"> Save </button>{" "}
              </form>
            ) : (
              <>
                {" "}
                {todo.title}{" "}
                <button onClick={() => handleUpdate(todo.id)}> Update </button>{" "}
                <button onClick={() => removeTodo(todo.id)}> Remove </button>{" "}
              </>
            )}{" "}
          </li>
        ))}{" "}
      </ul>{" "}
      <button onClick={handlePrintSelectedItems}> Print Selected Items </button>{" "}
      {state.error && <p className="error"> {state.error} </p>}{" "}
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
      {/* <div>
        <h3>Earlier Entries</h3>
        <ul
          entries={entries}
          title="All To dos!"
          handleUpdate={handleUpdate}
          removeTodo={removeTodo}
        />
      </div> */}
    </div>
  );
};

export default Advancedtodo;
