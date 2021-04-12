const tasks = [
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
];
export const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  );
};
