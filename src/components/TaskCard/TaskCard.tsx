import useApi from "../../hooks/useApi";
import { useAppDispatch } from "../../store";
import { deleteTasksActionCreator } from "../../store/tasks/tasksSlice";
import TaskStructure from "../../store/tasks/types";
import Button from "../Button/Button";

interface TaskCardProps {
  task: TaskStructure;
}

const TaskCard = ({
  task: { name, isDone, id },
}: TaskCardProps): JSX.Element => {
  const isDoneForCheckbox: number = isDone ? 1 : 0;
  const { deleteTasks } = useApi();
  const dispatch = useAppDispatch();

  const handleRemove = async () => {
    try {
      await deleteTasks(id);
    } catch (error) {
      return;
    }
    dispatch(deleteTasksActionCreator(id));
  };

  return (
    <div>
      <label className="container">
        <h3>{name}</h3>
        <input type="checkbox" value={isDoneForCheckbox} />
      </label>
      <Button actionOnClick={handleRemove} text="Delete" />
    </div>
  );
};

export default TaskCard;
