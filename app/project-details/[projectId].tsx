import { CreateTaskInput, DraggableTaskTilesList, ThemedText } from '@/components';
import { getProjectById } from '@/store/projectsSlice';
import { RootState } from '@/store/store';
import { getTasksByProjectId } from '@/store/tasksSlice';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

export default function ProjectDetails() {
  const params = useLocalSearchParams();
  const projectId = Array.isArray(params.projectId) ? params.projectId[0] : params.projectId;
  const project = useSelector((state:RootState) => getProjectById(state, projectId))
  const projectTasks = useSelector((state: RootState) => getTasksByProjectId(state, projectId));
  const [toggleEdit, setToggleEdit] = useState<boolean>(false)

  if(!project) return <ThemedText>Projekt nie znaleziony</ThemedText>;

  return (
    <View className='p-5'>
      <View className='pb-5 border-b border-gray-300'>
        <ThemedText className='mt-1 text-3xl font-InterBold'>{project.title}</ThemedText>
        <ThemedText className='mt-2 text-xl'>{project.description}</ThemedText>
      </View>
      <CreateTaskInput projectId={projectId} />
      <View className='flex flex-row items-center justify-between mt-5 mb-4'>
        <ThemedText className='ml-1 text-2xl font-InterMedium'>
          {`${projectTasks.length > 0 ? 'Lista zadań:' : 'Dodaj pierwsze zadanie'}`}
        </ThemedText>
        {
          projectTasks.length > 0 &&
            <Pressable
              onPress={() => setToggleEdit(value => !value)}
              className={`p-2 bg-black rounded-3xl  ${toggleEdit && 'opacity-85'}`}
            >
              <Icon size={24} name={toggleEdit ? 'edit-off' : 'edit'} color={"#fff"}/>
            </Pressable>
        }
      </View>
      <View className='w-full'>
        <DraggableTaskTilesList
          projectId={projectId}
          projectTasks={projectTasks}
          toggleEdit={toggleEdit}
        />
      </View>
    </View>
  );
}