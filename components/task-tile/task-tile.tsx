import { Task } from '@/types';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThemedText from '../themed-text';
import useTaskTile from './use-task-tile';

interface Props {
  task: Task
  toggleEdit: boolean
}

const TaskTile: React.FC<Props> = ({ task, toggleEdit }) => {
  const { deleteTaskById, updateTaskCompletion } = useTaskTile()
  const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(task.isCompleted)

  return (
    <View className='flex flex-row items-center w-full'>
      <View className='mr-1 -mt-2 -ml-2'>
        <Checkbox
          status={isTaskCompleted ? 'checked' : 'unchecked'}
          onPress={() => {
            setIsTaskCompleted(value => !value)
            updateTaskCompletion(task.id)
          }}
          color='#000'
        />
      </View>
      <View className={`${isTaskCompleted && 'opacity-45'} flex-row bg-white justify-between flex-1 p-2 mb-2 border border-gray-800 shadow min-h-12 rounded-3xl`}>
        <View className='flex-1 pl-1'>
          <ThemedText className={`${isTaskCompleted && 'line-through'} flex-wrap flex-shrink text-xl break-words`}>
            {task.title}
          </ThemedText>
        </View>
        {
          toggleEdit &&
            <Pressable
              onPress={() => deleteTaskById(task.id)}
              className='ml-3'
            >
              <Icon size={25} name="highlight-remove" color={"#f00000"}/>
            </Pressable>
        }
      </View>
    </View>
  )
}

export default TaskTile;