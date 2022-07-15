function UserData(props) {
  const { persons, tasks, setTasks } = props;

  //setTasks()

  if (!persons || persons.length === 0) return <p>Нет данных.</p>;
  console.log(persons.tasks);

  setTasks(persons.tasks);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {persons.tasks.map((person) => (
            <tr key={person.userId}>
              <td>{person.name}</td>
              <td>{person.done}</td>
              <td>{person.updatedAt}</td>
              {/* <td>{person.email}</td>
              <td>{person.phone}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserData;
