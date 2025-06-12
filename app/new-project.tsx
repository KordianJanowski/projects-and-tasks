import { CreateProjectForm, ThemedText } from '@/components';
import { View } from 'react-native';

export default function NewProject() {
  return (
    <View className='p-5'>
      <ThemedText className='ml-2 text-3xl font-semibold mb-5'>Dodaj nowy projekt</ThemedText>
      <CreateProjectForm />
    </View>
  );
}