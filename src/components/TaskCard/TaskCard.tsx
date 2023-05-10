import TaskStructure from "../../store/tasks/types";

interface TaskCardProps {
  task: TaskStructure;
}

const TaskCard = ({ task: { name, isDone } }: TaskCardProps): JSX.Element => {
  const isDoneForCheckbox: number = isDone ? 1 : 0;
  return (
    <div>
      <label className="container">
        <h3>{name}</h3>
        <input type="checkbox" value={isDoneForCheckbox} />
      </label>
      <button>Delete</button>
    </div>
  );
};

export default TaskCard;
