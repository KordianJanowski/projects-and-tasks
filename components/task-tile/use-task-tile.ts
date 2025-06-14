import { AppDispatch } from "@/store/store";
import { deleteTask, toggleTask } from "@/store/tasksSlice";
import { StorageKey, Task } from "@/types";
import { loadData, saveData } from "@/utils/storage";
import { useDispatch } from "react-redux";

const useTaskTile = () => {
  const dispatch = useDispatch<AppDispatch>();

  const deleteTaskById = async (taskId: string) => {
    try {
      const existingTasks = await loadData<Task[]>(StorageKey.TASKS);

      if (!existingTasks) return;

      const updatedTasks = existingTasks.filter(task => task.id !== taskId);

      await saveData(StorageKey.TASKS, updatedTasks);
      dispatch(deleteTask(taskId));
    } catch (error) {
      console.error('Błąd podczas usuwania zadania:', error);
    }
  }

  const updateTaskCompletion = async (taskId: string) => {
    try {
      const existingTasks = await loadData<Task[]>(StorageKey.TASKS);

      if (!existingTasks) return;

      const updatedTasks = existingTasks.map(task =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      );

      await saveData(StorageKey.TASKS, updatedTasks);

      dispatch(toggleTask(taskId));
    } catch (error) {
      console.error('Błąd podczas aktualizacji taska:', error);
    }
  }

  return {
    deleteTaskById,
    updateTaskCompletion
  }
}

export default useTaskTile