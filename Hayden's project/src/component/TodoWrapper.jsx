import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  //create a var that stores list of items
  const [todos, setTodos] = useState([
    { content: "hi", id: Math.random(), isCompleted: false, isEditing: false }, //one item in the array
  ]); //todos is a state variable, it stores item(attributes are content, id...) setTodos to change the value of the todos

  //addtodo is a function
  const addTodo = (content) => {
    setTodos([
      ...todos, //original array
      {
        content: content,
        id: Math.random(),
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };

  //filter is like delete function
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => { //todo here is an item in todos
        return todo.id !== id; //if not same(true), will include in the new array
      })
    );
  };

  //map is like for function
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id //if without ...todo, then the updated object will only contain the isCompleted property. All other properties (like content, id, etc.) will be lost.
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };

  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => { 
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    );
  };
  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEditing: false } //represents finish editing
          : todo;
      })
    );
  };
  return (
    <div className="wrapper">
      <h1>To Do List</h1>
      <CreateForm addTodo={addTodo} /> 
      {/* properties is {addTodo} to pass to child component */}
      {/* below is using javascript */}
      {todos.map((todo) => {
        return (
          <Todo
            toggleCompleted={toggleCompleted}
            toggleIsEditing={toggleIsEditing}
            editTodo={editTodo}
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
          /> //For every todo item, Call Todo component and their attributes
        );
      })}
    </div>
  );
}

export default TodoWrapper;
