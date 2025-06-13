import { Project } from '@/types';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, View } from 'react-native';
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
      <View className='flex flex-row w-full h-24 p-2 bg-white border border-gray-800 shadow rounded-3xl'>
        <View>
          <Image className='h-full border border-gray-400 aspect-square rounded-2xl' source={require('../../assets/images/placeholder-image-square.jpg')} />
        </View>
        <View className='flex flex-row justify-between flex-1 p-1 ml-4'>
          <View className='flex justify-center'>
            <ThemedText className='text-2xl'>{project.title}</ThemedText>
            <ThemedText className='text-xl text-gray-600'>{project.tasks.length} zadań</ThemedText>
          </View>
          {
            toggleEdit &&
              <View className='flex justify-start'>
                <Pressable onPress={() => deleteProjectById(project.id)}>
                  <Icon size={26} name="highlight-remove" color={"#000"}/>
                </Pressable>
              </View>
          }
        </View>
      </View>
    </Link>
  )
}

export default ProjectTile;