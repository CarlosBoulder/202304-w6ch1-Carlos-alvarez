import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import TaskStructure from "./types";

export interface TasksState {
  tasks: TaskStructure[];
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
      action: PayloadAction<TaskStructure[]>
    ): TasksState => ({
      ...currentState,
      tasks: [...action.payload],
    }),
    deleteTasks: (currentState, action: PayloadAction<number>): TasksState => ({
      ...currentState,
      tasks: currentState.tasks.filter((task) => {
        task.id !== action.payload;
      }),
    }),
  },
});

export const {
  loadTasks: loadTasksActionCreator,
  deleteTasks: deleteTasksActionCreator,
} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
