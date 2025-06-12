import { ProjectTile, ThemedText } from '@/components';
import { Project, StorageKey } from '@/types';
import { loadData } from '@/utils/storage';
import { useFocusEffect } from '@react-navigation/native';
import { Link } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen() {
  const [projects, setProjects] = useState<Project[]>([]);

  useFocusEffect(
    useCallback(() => {
      const fetchProjects = async () => {
        const stored = await loadData<Project[]>(StorageKey.PROJECTS);
        setProjects(stored || []);
      };

      fetchProjects();
    }, [])
  );

  return (
    <ScrollView className='p-5'>
      <Link href={'/new-project'}>
        <View className='flex w-full flex-row items-center justify-between px-5 py-2 border border-gray-800 bg-white rounded-3xl'>
          <ThemedText className='text-xl font-semibold mr-3'>Dodaj nowy projekt</ThemedText>
          <Icon size={28} name="add" color={"#000000"}/>
        </View>
      </Link>
      <ThemedText className='mt-5 ml-2 text-3xl mb-2'>Lista projektów:</ThemedText>
      {projects.map((project) => (
        <ProjectTile key={project.id} project={project} />
      ))}
    </ScrollView>
  );
}
