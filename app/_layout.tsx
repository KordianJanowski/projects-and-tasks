import { AppInitializer } from '@/core';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import "../global.css";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppInitializer />
    </Provider>
  );
}
