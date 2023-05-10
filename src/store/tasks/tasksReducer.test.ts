import taskMocks from "../../mocks/tasksMock";
import {
  TasksState,
  deleteTasksActionCreator,
  loadTasksActionCreator,
  tasksReducer,
} from "./tasksSlice";
import TaskStructure from "./types";

describe("Given a taskReducer reducer", () => {
  describe("When it receives an empty tasks list and a load tasks action with two tasks", () => {
    test("Then it should return a list with two tasks ", () => {
      const currentTasksState: TasksState = {
        tasks: [],
      };

      const newTasks: TaskStructure[] = [
        {
          id: 1,
          name: "climb",
          isDone: true,
        },
        {
          id: 2,
          name: "jump",
          isDone: true,
        },
      ];

      const expectedTasksState: TasksState = {
        tasks: newTasks,
      };

      const loadTasksAction = loadTasksActionCreator(newTasks);
      const newTasksState = tasksReducer(currentTasksState, loadTasksAction);

      expect(newTasksState).toStrictEqual(expectedTasksState);
    });
  });

  describe("When it receives a taskList with three tasks and a delete action for number 2 id", () => {
    test("Then it should return a list of tasks with two tasks", () => {
      const currentTaskState: TasksState = {
        tasks: taskMocks,
      };

      const expectedTaskState: TasksState = {
        tasks: [],
      };

      const deleteTasksAction = deleteTasksActionCreator(taskMocks[1].id);

      const newTasks = tasksReducer(currentTaskState, deleteTasksAction);

      expect(newTasks).toStrictEqual(expectedTaskState);
    });
  });
});
