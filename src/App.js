import React from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import ToDoItem from './components/ToDoItem'

 function App() {
  return (
          <div className='todo-list'>
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
          </div>
  )
}

export default App;
