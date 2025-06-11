import { Stack } from 'expo-router';
import 'react-native-reanimated';
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: 700,
        }
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Projekty',
        }}
      />
      <Stack.Screen
        name="new-project"
        options={{
          headerTitle: 'Nowy projekt',
        }}
      />
      <Stack.Screen
        name="project-details"
        options={{
          headerTitle: 'Szczegóły projektu',
        }}
      />
    </Stack>
  );
}
