import React, { useState } from "react";
import styles from "../styles/TodoList.module.css";
export default function TodoList({ list, update }) {
  // const [edit, setEdit] = useState("Edit");

  const removeElement = (id) => {
    let tmp = list.filter((item) => item.id != id);
    update(tmp);
  };

  function updates(e) {
    if (e.target.innerText === "Edit") {
      e.target.innerText = "Save";
    } else {
      e.target.innerText = "Edit";
    }
  }
  return (
    <>
      <div className={styles.title}>Task List</div>
      <ul className={styles.list}>
        {list.map((lis, index) => (
          <li key={lis?.id}>
            <input
              type="text"
              value={lis?.text}
              onChange={(e) => e.target.value}
            />

            <div className={styles.buttons}>
              <button onClick={updates}>Edit</button>
              <button onClick={() => removeElement(lis?.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
