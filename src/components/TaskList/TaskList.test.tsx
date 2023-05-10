import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";
import taskMocks from "../../mocks/tasksMock";
import { Provider } from "react-redux";
import { setupStore } from "../../store";

describe("Given a TaskList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a card with the name of the task", () => {
      const taskStateMock = {
        tasks: taskMocks,
      };

      const mockStore = setupStore({ tasksStore: taskStateMock });

      render(
        <Provider store={mockStore}>
          <TaskList />
        </Provider>
      );

      taskMocks.forEach((task) => {
        const name = screen.getByRole("heading", {
          name: task.name,
          level: 3,
        });
        expect(name).toBeInTheDocument();
      });
    });
  });
});
