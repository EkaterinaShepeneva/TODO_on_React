import { useState } from 'react'
import Task from './Task';
import TodoForm from './TodoForm.js';
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

  return (
    <main>
    <h1>ToDo</h1>
    <TodoForm 
    addTask={addTask}
    />
    <div className="tasksBox">
      {tasksRender.map((task) =>{ 
        return(
          <Task
            task={task}
            key={task.id}
           // checkTask = {checkTask}
            removeTask = {removeTask}
          />)}
      )}
    </div>
  </main>
  );
}

export default App;
