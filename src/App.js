import React, { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Footer from './components/Footer';



const App = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId)
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      )
      setTodos(updatedTodos)
      setEditId(0)
      setTodo("")
      return;
    }

    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      setTodo('');
    }
  }

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo])
  }

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id)
    setTodo(editTodo.todo)
    setEditId(id)
  }



  return (
    <div>
      {/* <Box sx={{ flexGrow: 1 }}> */}
        <AppBar  color='info'>
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Welcome
            </Typography>
          </Toolbar>
        </AppBar>
      {/* </Box> */}

      <div className='App'>


        <div className='container'>


          <h1>Todo List</h1>

          <TodoForm handleSubmit={handleSubmit} todo={todo}
            setTodo={setTodo} editId={editId} />

          <TodoList todos={todos} handleEdit={handleEdit}
            handleDelete={handleDelete} />

        </div>
      </div>

     <Footer/>

    </div>


  )
}

export default App
