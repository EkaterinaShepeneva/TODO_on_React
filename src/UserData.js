import { NUM_TASK } from "./constants.js";

function UserData(props) {
  const { persons, tasks, setTasks, setPagesCount } = props;

  //setTasks()

  if (!persons || persons.length === 0) return <p>Нет данных.</p>;
  //console.log(persons.tasks);

  setTasks(persons.tasks);
  setPagesCount(persons.count / NUM_TASK);

  return <div></div>;
}

export default UserData;
