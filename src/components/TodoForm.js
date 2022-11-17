import React from 'react'
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const TodoForm = ({handleSubmit,todo,setTodo,editId}) => {
  return (
    <div>
        <form className='todoform' onSubmit={handleSubmit}>
          <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
          <Button variant='contained' type='submit'>{editId ? "Edit":"Go"}</Button>
        </form>

    </div>
  )
}

export default TodoForm