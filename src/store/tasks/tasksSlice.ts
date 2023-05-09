import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import TasksStructure from "./types";

export interface TasksState {
  tasks: TasksStructure[];
}

export const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    loadTasks: (
      currentState,
      action: PayloadAction<TasksStructure[]>
    ): TasksState => ({
      ...currentState,
      tasks: [...action.payload],
    }),
  },
});

export const { loadTasks: loadTasksActionCreator } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
