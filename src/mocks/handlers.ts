import { rest } from "msw";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(apiUrl, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "climb",
          isDone: false,
        },
        {
          id: 2,
          name: "eat",
          isDone: false,
        },
        {
          id: 3,
          name: "sleep",
          isDone: false,
        },
      ])
    );
  }),
];
