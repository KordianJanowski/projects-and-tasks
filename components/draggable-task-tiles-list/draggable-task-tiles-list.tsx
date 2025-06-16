import { Task } from '@/types';
import React from 'react';
import { Pressable } from 'react-native';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';
import TaskTile from '../task-tile';
import useDraggabletaskTilesList from './use-draggable-task-tiles-list';

interface Props {
  projectTasks: Task[],
  projectId: string
  toggleEdit: boolean
}

const DraggableTaskTilesList: React.FC<Props> = ({ projectTasks, projectId, toggleEdit }) => {
  const { handleReorder } = useDraggabletaskTilesList({ projectId })

  return (
    <DraggableFlatList
      data={projectTasks}
      keyExtractor={(item) => item.id}
      onDragEnd={({ data }) => handleReorder(data)}
      renderItem={({ item, drag, isActive }: RenderItemParams<Task>) => (
        <Pressable onLongPress={drag} disabled={isActive}>
          <TaskTile
            task={item}
            toggleEdit={toggleEdit}
          />
        </Pressable>
      )}
    />
  )
}

export default DraggableTaskTilesList;