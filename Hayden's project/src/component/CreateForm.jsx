import { useState } from "react";
function CreateForm({addTodo}) {

  const [content, setContent] =  useState('');

  const handleSubmit = (e) =>{
    e.preventDefault()
    addTodo(content)
    setContent('')
  }
  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Insert tasks" value={content} onChange={(e) => {setContent(e.target.value)}}></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default CreateForm;