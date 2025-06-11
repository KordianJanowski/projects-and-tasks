import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function HomeScreen() {
  return (
    <View className='min-h-full flex items-center'>
      <Link className='mt-5' href={'/new-project'}>
        <View className='flex flex-row items-center justify-between px-5 py-2 border border-gray-800 bg-white rounded-3xl'>
          <Text className='text-xl font-semibold mr-3'>Dodaj nowy projekt</Text>
          <Icon size={28} name="add" color={"#000000"}/>
        </View>
      </Link>
    </View>
  );
}
