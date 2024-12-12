import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./Editform";

function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEditin, editTodo }) { //properties
  return todo.isEditing ? ( //isEditing? if yes call EditForm
    <EditForm todo={todo} editTodo={editTodo}/> //pass todo data and editTodo data
  ) : ( //shows task items
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <MdEdit onClick={()=>{toggleIsEditing(todo.id)}} style={{ cursor: "pointer" }} />
        <MdDelete
          onClick={() => {
            deleteTodo(todo.id);
          }}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}

export default Todo;
