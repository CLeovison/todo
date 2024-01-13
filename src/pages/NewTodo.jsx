import React, { useState } from "react";
import styles from "../styles/NewTodo.module.css";
import TodoList from "./TodoList";

export default function NewTodo() {
  const [todolists, setTodolists] = useState([]);
  const [todo, setTodo] = useState(" ");
  const [itemid, setItemid] = useState(0);

  function handleSubmit(e) {
    e.preventDefault()
    const trimmedTodo = todo.trim()
    if (trimmedTodo) {
      setTodolists([...todolists, { text: trimmedTodo, id: itemid }]);
      setItemid(itemid + 1);
    }
    setTodo("")
  }

  return (
    <>
      <form className={styles.username}>
        <label htmlFor="name" className={styles.greet}>
          Hey There,
        </label>
        <input type="text" id="name" className={styles.names} />
      </form>

      <div className={styles.add}>
        <input
          type="text"
          className={styles.addTodo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button className={styles.submit} onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <TodoList list={todolists} update={setTodolists} />
    </>
  );
}
