import { Project } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ProjectsState {
  items: Project[];
}

const initialState: ProjectsState = {
  items: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects(state, action: PayloadAction<Project[]>) {
      state.items = action.payload;
    },
    addProject(state, action: PayloadAction<Project>) {
      state.items.push(action.payload);
    },
    deleteProject(state, action: PayloadAction<string>) {
      state.items = state.items.filter(p => p.id !== action.payload);
    },
  },
});

export const getProjectById = (state: RootState, id: string) =>
  state.projects.items.find(project => project.id === id);

export const { setProjects, addProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;
