import { Project } from '@/types';
import { Link } from 'expo-router';
import React from 'react';
import { Image, View } from 'react-native';
import ThemedText from '../themed-text';

interface Props {
  project: Project
}

const ProjectTile: React.FC<Props> = ({ project }) => {
  return (
    <Link className='mt-4' href={'/project-details'}>
      <View className='flex flex-row w-full h-24 p-2 border border-gray-800 rounded-3xl bg-white'>
        <View>
          <Image className='aspect-square h-full rounded-3xl border border-gray-400' source={require('../../assets/images/placeholder-image-square.jpg')} />
        </View>
        <View className='ml-4 p-1 flex justify-center'>
          <ThemedText className='text-2xl'>{project.title}</ThemedText>
          <ThemedText className='text-xl text-gray-600'>{project.tasks.length} zadań</ThemedText>
        </View>
      </View>
    </Link>
  )
}

export default ProjectTile;