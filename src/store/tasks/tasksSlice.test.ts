import { TasksState, loadTasksActionCreator, tasksReducer } from "./tasksSlice";
import TasksStructure from "./types";

describe("Given a taskReducer reducer", () => {
  describe("When it receives an empty tasks list and a load tasks action with two tasks", () => {
    test("Then it should return a list with two tasks ", () => {
      const currentTasksState: TasksState = {
        tasks: [],
      };

      const newTasks: TasksStructure[] = [
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
});
