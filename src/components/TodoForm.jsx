import React, { useState } from "react";
import {useTodo} from "../contexts/TodoContext"
function TodoForm() {
  const [todo , setTodo] = useState("")
  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault();
    if(!todo){
      return 
    } else{
      addTodo({ todo : todo , completed: false})
      setTodo("")
    }
  }
  return (
      <form onSubmit={add}  className="flex ">
          <input
              type="text"
              placeholder="Add tasks..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-black"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-500 opacity-70 text-black shrink-0">
              Add
          </button>
      </form>
  );
}
export default TodoForm;