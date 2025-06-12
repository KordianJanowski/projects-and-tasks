export type Project = {
  id: string
  title: string,
  description: string
  tasks: Task[]
}

export type Task = {
  id: string
  title: string
}

export enum StorageKey {
  PROJECTS = 'projects'
}