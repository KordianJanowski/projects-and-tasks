import { AppDispatch } from "@/store/store";
import { addTask } from "@/store/tasksSlice";
import { StorageKey, Task } from "@/types";
import { loadData, saveData } from "@/utils/storage";
import { useState } from "react";
import uuid from 'react-native-uuid';
import { useDispatch } from "react-redux";

interface Props {
  projectId: string
}

const useCreateTaskInput = ({ projectId }:Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [taskTitle, setTaskTitle] = useState<string>('')

  const createTask = async () => {
    try {
      const newTask: Task = {
        id: uuid.v4(),
        projectId: projectId,
        title: taskTitle.trim(),
        isCompleted: false
      }

      const existingTasks = await loadData<Task[]>(StorageKey.TASKS) || [];
      const updatedTasks = [...existingTasks, newTask];

      await saveData(StorageKey.TASKS, updatedTasks);
      dispatch(addTask(newTask));

      setTaskTitle("");
    }
    catch(e) {
      console.error('Error when adding a task', e);
    }
  }

  return {
    taskTitle,
    setTaskTitle,
    createTask
  }
}

export default useCreateTaskInput;