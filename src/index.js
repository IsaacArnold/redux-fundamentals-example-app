import store from "./store";

console.log("Initial state:", store.getState());

store.dispatch({ type: "todos/todoAdded", payload: "Learn about actions" });
