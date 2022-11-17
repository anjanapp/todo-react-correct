import React from 'react'
// import Button from 'react-bootstrap/Button';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const TodoList = ({ todos, handleEdit, handleDelete }) => {
  return (
    <div>
      <ul className='allTodos'>
        {
          todos.map((t) => (
            <li className='singleTodo'>
              <span className='todoText' key={t.id}>
                {t.todo}
              </span>
              <Stack spacing={2} direction='row'>
              <Button variant='contained' onClick={() => handleEdit(t.id)}>edit</Button>
              <Button variant='contained' onClick={(() => handleDelete(t.id))}>delete</Button>


              </Stack>
            </li>


          ))
        }

      </ul>

    </div>
  )
}

export default TodoList