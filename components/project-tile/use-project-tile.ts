import { deleteProject } from "@/store/projectsSlice";
import { AppDispatch } from "@/store/store";
import { Project, StorageKey } from "@/types";
import { loadData, saveData } from "@/utils/storage";
import { useDispatch } from "react-redux";

const useProjectTile = () => {
  const dispatch = useDispatch<AppDispatch>();

  const deleteProjectById = async (projectId: string) => {
    try {
      const existingProjects = await loadData<Project[]>(StorageKey.PROJECTS);

      if (!existingProjects) return;

      const updatedProjects = existingProjects.filter(project => project.id !== projectId);

      await saveData(StorageKey.PROJECTS, updatedProjects);
      dispatch(deleteProject(projectId));
    } catch (error) {
      console.error('Błąd podczas usuwania projektu:', error);
    }
  }

  return {
    deleteProjectById
  }
}

export default useProjectTile