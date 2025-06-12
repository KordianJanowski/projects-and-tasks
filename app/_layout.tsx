import { Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import { View } from 'react-native';
import 'react-native-reanimated';
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <View></View>;
  }


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
