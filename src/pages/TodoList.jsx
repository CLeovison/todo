import React, { useState } from "react";
import styles from "../styles/TodoList.module.css";
export default function TodoList({ list, update }) {
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null)

  const removeElement = (id) => {
    update(list.filter((item) => item.id != id));
  };

  // list.map will iterate over each item in the list array
  // function inside map will transform each item in the array and returns a new array
  // For each item in the list, it will check whether the item's id (item.id) is equal to the id of the item being edited (id)
  // If it is equal, it will create a new object with all the properties of the current item (...item)
  // If it is not equal, the item will remain unchanged
  const handleSave = (id) => {
    // example scenario:
    // i want to edit todo 2
    // trigger handleSave
    // id = 2
    // 
    // [{ text: todo 1, id: 1, createdAt: '13 Jan', isCompleted: false }, { text: todo 2, id: 2 }]
    update(list.map(item => item.id === id ? { ...item, text: editText } : item))
    setEditId(null)
  }

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditText(item.text)
  }

  return (
    <>
      <div className={styles.title}>Task List</div>
      <ul className={styles.list}>
        {list.map((lis, index) => (
          <li key={lis?.id}>
            {editId === lis.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => {
                  e.preventDefault();
                  setEditText(e.target.value)
                }}
              />
            ) : (
              <span>{ lis.text }</span>
            )
            }
            <div className={styles.buttons}>
              {editId === lis.id ? (
                <button onClick={() => handleSave(lis.id)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(lis)}>Edit</button>
              )}
                <button onClick={() => removeElement(lis.id)}>Delete</button>

            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
