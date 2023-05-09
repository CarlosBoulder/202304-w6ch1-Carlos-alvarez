import TaskStructure from "../../store/tasks/types";

interface TaskCardProps {
  task: TaskStructure;
}

const TaskCard = ({ task: { name, isDone } }: TaskCardProps): JSX.Element => {
  const isDoneForCheckbox: number = isDone ? 1 : 0;
  return (
    <div>
      <label>
        <input type="checkbox" value={isDoneForCheckbox} />
        {name}
      </label>
      <button>Delete</button>
    </div>
  );
};

export default TaskCard;
