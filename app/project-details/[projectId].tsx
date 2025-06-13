import { ThemedText } from '@/components';
import { getProjectById } from '@/store/projectsSlice';
import { RootState } from '@/store/store';
import { Link, useLocalSearchParams } from 'expo-router';
import { ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

export default function ProjectDetails() {
  const params = useLocalSearchParams();
  const projectId = Array.isArray(params.projectId) ? params.projectId[0] : params.projectId;
  const project = useSelector((state:RootState) => getProjectById(state, projectId))

  if(!project) return <ThemedText>Projekt nie znaleziony</ThemedText>;

  return (
    <ScrollView className='p-5'>
      <ThemedText className='mt-1 text-3xl font-InterBold'>{project.title}</ThemedText>
      <ThemedText className='mt-5 text-xl'>{project.description}</ThemedText>
      <Link className='mt-10' href={'/new-project'}>
        <View className='flex flex-row items-center justify-between w-full px-5 py-2 bg-white border border-gray-800 rounded-3xl'>
          <ThemedText className='mr-3 text-xl font-semibold'>Dodaj nowe zadanie</ThemedText>
          <Icon size={28} name="add" color={"#000000"}/>
        </View>
      </Link>
      <View className='flex flex-row items-center justify-between mt-2 mb-2'>
        <ThemedText className='ml-1 text-2xl font-InterMedium'>
          {`${project.tasks.length < 0 ? 'Lista zadań:' : 'Dodaj pierwsze zadanie'}`}
        </ThemedText>
      </View>
    </ScrollView>
  );
}