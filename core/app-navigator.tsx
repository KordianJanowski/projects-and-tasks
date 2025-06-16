import { Stack } from 'expo-router';

export default function AppNavigator() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: 'Inter_700Bold'
        }
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Projekty'
        }}
      />
      <Stack.Screen
        name="new-project"
        options={{
          headerTitle: 'Nowy projekt'
        }}
      />
      <Stack.Screen
        name="project-details/[projectId]"
        options={{
          headerTitle: 'Szczegóły projektu'
        }}
      />
    </Stack>
  );
}
