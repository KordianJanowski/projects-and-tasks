import { AppDispatch } from "@/store/store";
import { setTasks } from "@/store/tasksSlice";
import { StorageKey, Task } from "@/types";
import { loadData, saveData } from "@/utils/storage";
import { useDispatch } from "react-redux";

interface Props {
  projectId: string
}

const useDraggabletaskTilesList = ({ projectId }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleReorder = async (reorderedProjectTasks: Task[]) => {
    try {
      const allTasks = await loadData<Task[]>(StorageKey.TASKS);
      if (!allTasks) return;

      const tasksFromOtherProjects = allTasks.filter(task => task.projectId !== projectId);
      const updatedTasks = [...tasksFromOtherProjects, ...reorderedProjectTasks];

      dispatch(setTasks(updatedTasks));
      await saveData(StorageKey.TASKS, updatedTasks);
    } catch (error) {
      console.error("Błąd przy aktualizacji kolejności tasków:", error);
    }
  };

  return {
    handleReorder
  }
}

export default useDraggabletaskTilesList;