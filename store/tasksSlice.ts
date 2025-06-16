import { Task } from '@/types';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface TasksState {
  items: Task[];
}

const initialState: TasksState = {
  items: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.items = action.payload;
    },
    addTask(state, action: PayloadAction<Task>) {
      state.items.push(action.payload);
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
    toggleTask(state, action: PayloadAction<string>) {
      const task = state.items.find(task => task.id === action.payload);
      if (task) task.isCompleted = !task.isCompleted;
    },
  },
});

export const getTasks = (state: RootState) => state.tasks.items;

export const getTasksByProjectId = createSelector(
  [getTasks, (_: RootState, projectId: string) => projectId],
  (tasks, projectId) => tasks.filter(task => task.projectId === projectId)
);

export const getTaskCountByProjectId = createSelector(
  [getTasks, (_: RootState, projectId: string) => projectId],
  (tasks, projectId) => tasks.filter(task => task.projectId === projectId).length
);

export const { setTasks, addTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
