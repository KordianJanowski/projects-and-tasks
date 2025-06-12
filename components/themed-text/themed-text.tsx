import React, { ReactNode } from 'react';
import { Text } from 'react-native';

interface Props {
  children: ReactNode
  className?: string
}

const ThemedText: React.FC<Props> = ({ children, className }) => {
  return (
    <Text className={`${className} font-Inter`}>
      {children}
    </Text>
  )
}

export default ThemedText;