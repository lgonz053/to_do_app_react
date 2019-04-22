import React from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import ToDoItem from './components/ToDoItem'
import ToDosData from './components/ToDosData'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tasks: ToDosData.map(item => <ToDoItem key={item.id} text={item.text} completed={item.completed} />)
    }
  }

  render() {
    return (
            <div className='todo-list'>
              {this.state.tasks}
            </div>
    )
  }
}

export default App;
