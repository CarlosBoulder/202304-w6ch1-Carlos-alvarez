import { useAppSelector } from "../../store";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = (): JSX.Element => {
  const tasks = useAppSelector((state) => state.tasksStore.tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
