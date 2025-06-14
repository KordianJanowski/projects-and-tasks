import { Project } from '@/types';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThemedText from '../themed-text';
import useProjectTile from './use-project-tile';

interface Props {
  project: Project
  toggleEdit: boolean
}

const ProjectTile: React.FC<Props> = ({ project, toggleEdit }) => {
  const { deleteProjectById } = useProjectTile()

  return (
    <Link className='mt-4' href={{
      pathname: '/project-details/[projectId]',
      params: { projectId: project.id },
    }}>
      <View className='flex flex-row items-center w-full p-3 bg-white border border-gray-800 shadow min-h-24 rounded-3xl'>
        <View className='flex flex-row justify-between flex-1 h-full pl-2'>
          <View className='flex justify-center flex-1'>
            <ThemedText className='text-2xl'>{project.title}</ThemedText>
            <ThemedText className='text-lg text-gray-600'>Liczba zadań: 0</ThemedText>
          </View>
          {
            toggleEdit &&
              <Pressable
                onPress={() => deleteProjectById(project.id)}
                className='ml-3'
              >
                <Icon size={26} name="highlight-remove" color={"#f00000"}/>
              </Pressable>
          }
        </View>
      </View>
    </Link>
  )
}

export default ProjectTile;