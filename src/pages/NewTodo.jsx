import { useState, useEffect } from "react";
import styles from "../styles/NewTodo.module.css";
import TodoList from "./TodoList";

export default function NewTodo() {
  // Set initial state to local storage data
  const [todolists, setTodolists] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error("Error reading from local storage", error);
      return [];
    }
  });

  const [todo, setTodo] = useState(" ");

  // Load todos and itemid from local storage when the component mounts
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodolists(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos and itemid to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolists));
  }, [todolists]);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedTodo = todo.trim();
    if (trimmedTodo) {
      // Using the current timestamp as a unique ID
      const newTodo = {
        text: trimmedTodo,
        id: Date.now(),
      };
      setTodolists([...todolists, newTodo]);
    }
    setTodo("");
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
