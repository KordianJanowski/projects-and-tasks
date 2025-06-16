import { AppInitializer } from '@/core';
import { store } from '@/store/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import "../global.css";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <AppInitializer />
      </GestureHandlerRootView>
    </Provider>
  );
}
