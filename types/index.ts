export type Project = {
  id: string
  title: string,
  description: string
}

export type Task = {
  id: string
  projectId: string;
  title: string
  isCompleted: boolean
}

export enum StorageKey {
  PROJECTS = 'projects',
  TASKS = 'tasks'
}