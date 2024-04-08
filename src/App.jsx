import './App.css'
import Auth from './components/todo-auth/auth'
import TodoBoard from './components/todo-board/todoBoard'
import TodoFullyTask from './components/todo-fullyTask/todoFullyTask'
import TodoModalTask from './components/todo-modalTask/todoModalTask'

function App() {

  return (
    <div>
      <Auth />
      <TodoBoard />
    </div>
  )
}

export default App
