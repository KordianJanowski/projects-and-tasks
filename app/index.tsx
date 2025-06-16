import { ProjectTile, ThemedText } from '@/components';
import { AppDispatch, RootState } from '@/store/store';
import { Link, useFocusEffect } from 'expo-router';
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
      return () => setToggleEdit(false);
    }, [dispatch])
  );

  return (
    <ScrollView className='p-5'>
      <Link href={'/new-project'}>
        <View className='flex flex-row items-center justify-between w-full px-5 py-2 bg-black border border-gray-800 rounded-3xl'>
          <ThemedText className='mr-3 text-xl font-semibold text-white'>Dodaj nowy projekt</ThemedText>
          <Icon size={28} name="add" color={"#fff"}/>
        </View>
      </Link>
      <View className='flex flex-row items-center justify-between mt-5 mb-2'>
        <ThemedText className='ml-1 text-3xl font-InterMedium'>
          {`${projects.length > 0 ? 'Lista projektów:' : 'Dodaj pierwszy projekt'}`}
        </ThemedText>
        {
          projects.length > 0 &&
            <Pressable
              onPress={() => setToggleEdit(value => !value)}
              className={`p-2 bg-black rounded-3xl  ${toggleEdit && 'opacity-85'}`}
            >
              <Icon size={30} name={toggleEdit ? 'edit-off' : 'edit'} color={"#fff"}/>
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
