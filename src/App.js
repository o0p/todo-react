import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Do 1',
      day: 'Mon',
      reminder: true,
    },
    {
      id: 2,
      text: 'Do 2',
      day: 'Tue',
      reminder: true,
    },
    {
      id: 3,
      text: 'Do 3',
      day: 'Fri',
      reminder: false,
    },
  ]);

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
