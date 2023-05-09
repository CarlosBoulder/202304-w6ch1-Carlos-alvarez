import { render, screen } from "@testing-library/react";
import taskMocks from "../../mocks/tasksMock";
import TaskCard from "./TaskCard";

describe("Given a TaskCard component", () => {
  describe("When it receives the task 'climb'", () => {
    test("Then it should show a card with the text 'climb'", () => {
      const task = taskMocks[0];

      const expectedName = task.name;

      render(<TaskCard task={task} />);

      const name = screen.getByLabelText(expectedName);

      expect(name).toBeInTheDocument();
    });
  });
});
