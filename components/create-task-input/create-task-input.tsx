import { Pressable, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useCreateTaskInput from './use-create-task-input';

interface Props {
  projectId: string
}

const CreateTaskInput: React.FC<Props> = ({ projectId }) => {
  const { taskTitle, setTaskTitle, createTask } = useCreateTaskInput({ projectId })

  return (
    <View className='flex flex-row items-center justify-between w-full h-12 mt-5 overflow-hidden bg-white border border-gray-800 rounded-3xl'>
      <TextInput
        placeholder='Treść nowego zadania'
        value={taskTitle}
        onChangeText={setTaskTitle}
        className='flex-row items-center justify-between flex-1 px-5 py-2 text-xl font-Inter rounded-3xl'
      />
      <Pressable
        disabled={taskTitle.trim() === ''}
        onPress={createTask}
        className='flex items-center justify-center h-full px-3 bg-black shadow rounded-3xl'
      >
        <Icon size={30} name="add" color={"#fff"}/>
      </Pressable>
    </View>
  )
}

export default CreateTaskInput;