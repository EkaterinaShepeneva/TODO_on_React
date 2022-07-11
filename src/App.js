import { useState } from 'react'
import Task from './Task';
import TodoForm from './TodoForm.js';
import Filters from './Filters';
import moment from "moment";

let tasksArray = []

function App() {
  const [tasksRender, setRender] = useState([])

  const addTask = (userInput) => {
    if(userInput){
      const newTask = {
        title: userInput,
        id: Date.now(),
        check: false,
        date: moment().format("DD/MM/YYYY")
      }
      tasksArray.push(newTask)
      setRender([...tasksRender, newTask])
    }
  }

  const removeTask = (id) => {
    tasksArray = tasksArray.filter(task => task.id !== id)
    setRender(tasksArray)
  }

  const checkTask = (id) => {
    tasksArray.find(task => {
        if (task.id === id){
          task.check = !task.check
        }
      })
    setRender(tasksArray)
  }

  const filterAllArray = () => setRender(tasksArray)

  const filterDoneArray = (array) => setRender([...array.filter(task => task.check === true)])

  const filterUnDoneArray = (array) => setRender([...array.filter(task => !task.check === true)])

  const sortEarlyDate = (array) => setRender([...array.sort((prev, next) => next.id - prev.id)])

  const sortLastDate = (array) => setRender([...array.sort((prev, next) => prev.id - next.id)])



  return (
    <main>
    <h1>ToDo</h1>
    <TodoForm 
    addTask={addTask}
    />
    <Filters
      tasksArray={tasksArray}
      tasksRender={tasksRender}
      filterAllArray={filterAllArray}
      filterDoneArray={filterDoneArray}
      filterUnDoneArray={filterUnDoneArray}
      sortEarlyDate={sortEarlyDate}
      sortLastDate={sortLastDate}
    />
    <div className="tasksBox">
      {tasksRender.map((task) =>{ 
        return(
          <Task
            task={task}
            key={task.id}
            removeTask = {removeTask}
            checkTask = {checkTask}
          />)}
      )}
    </div>
  </main>
  );
}

export default App;
