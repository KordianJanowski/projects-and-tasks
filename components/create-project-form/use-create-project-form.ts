import { Project, StorageKey } from '@/types';
import { loadData, saveData } from '@/utils/storage';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import uuid from 'react-native-uuid';
import {
  creareProjectFormData,
  createProjectFormDefaultValues,
  createProjectFormSchema
} from './create-project-form.config';


const useCreateProjectForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<creareProjectFormData>({
    resolver: zodResolver(createProjectFormSchema),
    defaultValues: createProjectFormDefaultValues
  });
  const router = useRouter()

  const addNewProject = async (data: creareProjectFormData) => {
    try {
      const newProject: Project = {
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        tasks: []
      }

      const existingProjects = (await loadData<Project[]>(StorageKey.PROJECTS)) || [];

      const updatedProjects = [...existingProjects, newProject];

      await saveData(StorageKey.PROJECTS, updatedProjects);

      router.replace('/')
    }
    catch(e) {
      console.error('Error when adding a project', e);
    }
  }

  return {
    addNewProject,
    control,
    handleSubmit,
    errors
  }
}

export default useCreateProjectForm;