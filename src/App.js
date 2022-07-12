import { useState } from 'react'
import Task from './Task';
import TodoForm from './TodoForm.js';
import Filters from './Filters';
import moment from "moment";


function App() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilter] = useState('filter__all');
  const [page, setPages] = useState(1);
  const [sort, setSort] = useState('sort__last');

const handleFilter = (filter) => {
  setFilter(filter)
}
const handleSort = (sort) => {
  setSort(sort)
};
const handlePage = () => {
  //set
}
const addTask = (userInput) => {
    if(userInput){
      const newTask = {
        title: userInput,
        id: Date.now(),
        check: false,
        date: moment().format("DD/MM/YYYY")
      }

      setTasks([...tasks, newTask])
    }
  }

  const removeTask = (id) => setTasks(tasks.filter(task => task.id !== id))

  const checkTask = (task) => task.check = !task.check

  return (
    <main>
    <h1>ToDo</h1>
    <TodoForm 
    addTask={addTask}
    />
    <Filters
      onFilter={handleFilter}
      onSort={handleSort}
      filters={filters}
      sort={sort}

    />
    <div className="tasksBox">
      {
        tasks.filter(task => filters === 'filter__all' ? (tasks):(filters === 'filter__done' ? (task.check === true):(task.check !== true))).sort((prev, next) => sort === 'sort__last' ? (prev.id - next.id):(next.id - prev.id)).map((task) =>{ 
        return(
          <Task
            task={task}
            key={task.id}
            removeTask = {removeTask}
            checkTask = {checkTask}
            tasks={tasks}
          />)}
      )}
    </div>
  </main>
  );
}

export default App;
