import { ProjectTile, ThemedText } from '@/components';
import { setProjects } from '@/store/projectsSlice';
import { AppDispatch, RootState } from '@/store/store';
import { Project } from '@/types';
import { loadData } from '@/utils/storage';
import { useFocusEffect } from '@react-navigation/native';
import { Link } from 'expo-router';
import { useCallback, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector((state: RootState) => state.projects.items);
  const [toggleEdit, setToggleEdit] = useState<boolean>(false)

  useFocusEffect(
    useCallback(() => {
      const fetchProjects = async () => {
        const storedProjects = await loadData<Project[]>('projects');
        dispatch(setProjects(storedProjects || []));
      };
      fetchProjects();
    }, [dispatch])
  );

  return (
    <ScrollView className='p-5'>
      <Link href={'/new-project'}>
        <View className='flex flex-row items-center justify-between w-full px-5 py-2 bg-white border border-gray-800 rounded-3xl'>
          <ThemedText className='mr-3 text-xl font-semibold'>Dodaj nowy projekt</ThemedText>
          <Icon size={28} name="add" color={"#000000"}/>
        </View>
      </Link>
      <View className='flex flex-row items-center justify-between mt-5 mb-2'>
        <ThemedText className='ml-1 text-3xl'>
          {`${projects.length > 0 ? 'Lista projektów:' : 'Dodaj pierwszy projekt'}`}
        </ThemedText>
        {
          projects.length > 0 &&
            <Pressable
              onPress={() => setToggleEdit(value => !value)}
              className={`p-2 bg-black rounded-2xl  ${toggleEdit && 'opacity-85'}`}
            >
              <Icon size={32} name={toggleEdit ? 'edit-off' : 'edit'} color={"#fff"}/>
            </Pressable>
        }
      </View>
      {projects.map((project) => (
        <ProjectTile
          key={project.id}
          project={project}
          toggleEdit={toggleEdit}
        />
      ))}
    </ScrollView>
  );
}
