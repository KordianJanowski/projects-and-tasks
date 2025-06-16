import { setProjects } from '@/store/projectsSlice';
import { setTasks } from '@/store/tasksSlice';
import { Project, StorageKey, Task } from '@/types';
import { loadData } from '@/utils/storage';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch } from 'react-redux';
import AppNavigator from './app-navigator';

export default function AppInitializer() {
  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const [projects, tasks] = await Promise.all([
        loadData<Project[]>(StorageKey.PROJECTS),
        loadData<Task[]>(StorageKey.TASKS),
      ]);
      if (projects) dispatch(setProjects(projects));
      if (tasks) dispatch(setTasks(tasks));
      setDataLoaded(true);
    };

    fetchData();
  }, []);

  if (!fontsLoaded || !dataLoaded) {
    return (
      <View className="items-center justify-center flex-1">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <AppNavigator />;
}
