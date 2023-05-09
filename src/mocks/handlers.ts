import { rest } from "msw";
import taskMocks from "./tasksMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(apiUrl, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(taskMocks));
  }),
];
