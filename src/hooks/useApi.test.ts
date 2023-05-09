import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import tasksMock from "../mocks/tasksMock";

describe("Given a getTasks function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of tasks", async () => {
      const expectListTasks = tasksMock;
      const {
        result: {
          current: { getTasks },
        },
      } = renderHook(() => useApi());

      const movies = await getTasks();

      expect(movies).toStrictEqual(expectListTasks);
    });
  });
});
