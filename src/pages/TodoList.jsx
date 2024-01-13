import React,{useState} from 'react'
import styles from "../styles/TodoList.module.css"
export default function TodoList({list}) {

  return (
    <>
    <div className={styles.title}>Task List</div>
    <ul className={styles.list}>
      {list.map((lis,index )=>(<>
      
        <li key={index} ><input type="text" value={'qwqw'}/>{console.log(index)}</li>
      </>))}
    </ul>

    </>
  )
}
