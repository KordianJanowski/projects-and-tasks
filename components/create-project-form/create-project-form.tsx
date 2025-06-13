import React from 'react';
import { Controller } from 'react-hook-form';
import { Pressable, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThemedText from '../themed-text';
import useCreateProjectForm from './use-create-project-form';

const CreateProjectForm: React.FC = () => {
  const { addNewProject, control, errors, handleSubmit } = useCreateProjectForm()

  return (
    <View>
      <Controller
        control={control}
        name="title"
        render={({ field: { value, onChange } }) => (
          <TextInput
            placeholder='Tytuł projektu'
            value={value}
            onChangeText={onChange}
            className='flex flex-row items-center justify-between w-full px-5 py-2 text-xl bg-white border border-gray-800 font-Inter rounded-3xl'
          />
        )}
      />
      {errors.title && <ThemedText className="mb-2 ml-1 text-lg text-red-500">{errors.title.message}</ThemedText>}
      <Controller
        control={control}
        name="description"
        render={({ field: { value, onChange  } }) => (
          <TextInput
            placeholder='Opis projektu'
            multiline={true}
            numberOfLines={5}
            value={value}
            onChangeText={onChange}
            className='flex flex-row items-center justify-between w-full px-5 py-2 mt-3 text-xl bg-white border border-gray-800 font-Inter h-36 rounded-3xl'
            textAlignVertical="top"
          />
        )}
      />
      {errors.description && <ThemedText className="mb-2 ml-1 text-lg text-red-500">{errors.description.message}</ThemedText>}
      <Pressable
        onPress={handleSubmit(addNewProject)}
        className='flex flex-row items-center justify-between px-5 py-2 mt-5 bg-black border border-white rounded-3xl'
      >
        <ThemedText className='text-2xl text-white'>Dodaj projekt</ThemedText>
        <Icon size={28} name="add" color={"#fff"}/>
      </Pressable>
    </View>
  )
}

export default CreateProjectForm;