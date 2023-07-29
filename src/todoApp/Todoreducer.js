export const initialState = {
  todos: [],
  error: null,
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              title: action.payload.title,
            };
          }
          return todo;
        }),
      };
    // case "UPDATE_TODO":
    //   return {
    //     ...state,
    //     todos: state.todos.filter((todo) => todo.id !== action.payload),
    //   };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
