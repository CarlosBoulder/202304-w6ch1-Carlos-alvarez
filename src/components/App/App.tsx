import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppDispatch } from "../../store";
import TaskList from "../TaskList/TaskList";
import { loadTasksActionCreator } from "../../store/tasks/tasksSlice";

const App = (): JSX.Element => {
  const { getTasks } = useApi();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const tasks = await getTasks();
        dispatch(loadTasksActionCreator(tasks));
      } catch {
        return;
      }
    })();
  }, [dispatch, getTasks]);

  return (
    <>
      <h2>ToDos list</h2>
      <TaskList />
    </>
  );
};

export default App;
