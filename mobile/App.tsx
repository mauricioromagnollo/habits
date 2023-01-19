import './src/lib/dayjs'
import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

import { Loading } from './src/components';
import { Home } from './src/screens';

export default function App() {
  const [ isFontsLoaded ] = useFonts({
    useFonts,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!isFontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <Home />
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    </>
  );
}
