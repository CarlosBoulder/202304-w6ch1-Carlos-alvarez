import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import TasksStructure from "./types";

export interface TasksState {
  tasks: TasksStructure[];
}

export const initialTasksState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  initialState: initialTasksState,
  name: "tasks",
  reducers: {
    loadTasks: (
      _currentState,
      action: PayloadAction<TasksState>
    ): TasksState => ({ ...action.payload }),
  },
});

export const { loadTasks: loadTasksActionCreator } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
