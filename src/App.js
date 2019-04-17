import React from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import ToDoItem from './components/ToDoItem'
import ToDosData from './components/ToDosData'

 function App() {
  const items = ToDosData.map(item => <ToDoItem key={item.id} text={item.text} completed={item.completed} />)

  return (
          <div className='todo-list'>
            {items}
          </div>
  )
}

export default App;
